import React, { useState } from 'react';

// pacakges
import { useMutation } from '@apollo/client';

// components
import ButtonComp from '@/components/Button';
import { Avatar, Box, Button, CircularProgress } from '@mui/material';
import { showToast } from '@/utils/Toast/toast';

// utils
import { uploadToCloudinery } from '@/utils/services';
import {
  CreateUploadFile,
  CreateUploadFileVariables,
} from '@/graphql/__generated__/CreateUploadFile';
import { CREATE_UPLOAD_FILE } from '@/graphql/query.graphql';

const UploadImage = () => {
  const [profileId, setProfileId] = useState<string | undefined>('');
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [previewSource, setPreviewSource] = useState<string | null>(null);
  const [createUploadFile, { data, error }] = useMutation<
    CreateUploadFile,
    CreateUploadFileVariables
  >(CREATE_UPLOAD_FILE);

  // a function to display image for optimistic rendering
  function previewProfileImage(file: File | null) {
    if (!file) {
      setPreviewSource(null);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result && reader?.result.toString());
    };
  }

  // handle profile image upload
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsImageUploading(true);
    uploadToCloudinery(event, setProfileId, previewProfileImage).then(data => {
      createUploadFile({
        variables: {
          data: {
            name: data.original_filename,
            alternativeText: 'Image',
            caption: 'Image',
            height: data.height,
            width: data.width,
            hash: data.signature,
            size: data.bytes,
            url: data.secure_url,
            previewUrl: data.secure_url,
            provider: 'cloudinary',
            mime: `image/${data.format}`,
            folderPath: data.folder,
          },
        },
      })
        .then(res => {
          setProfileId(res.data?.createUploadFile?.data?.id || '1'),
            setIsImageUploading(false);
        })
        .catch(err => {
          console.log(err);
          setIsImageUploading(false);
        });
    });
  };
  console.log({ data });

  return (
    <section className='h-screen w-full bg-primary-1000 pt-[154px]'>
      <div className='p-10 xl:mx-[300px]'>
        {/* top Title starts */}
        <div>
          <h4 className='font-semi-bold text-h3'>
            Welcome! Let’s create your profile
          </h4>
          <h6 className='mt-4 text-h6 font-regular text-neutral-400'>
            Let other see you how you look
          </h6>
        </div>
        {/* top Title ends */}

        {/* image upload starts */}
        <div className='mt-12'>
          <h5 className='font-semi-bold text-neutral-300'>Add an avatar</h5>
          <div className='relative w-[170px] h-[170px] my-5'>
            <input
              type='file'
              id='profilePic'
              name='profilePic'
              className='h-full w-full opacity-0'
              onChange={e => handleUpload(e)}
            />
            <label htmlFor='profilePic'>
              {/* {true && (
                <div className='absolute w-full h-full top-0 left-0'>
                  <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                  </Box>
                </div>
              )} */}
              <div className='absolute w-full h-full top-0 left-0'>
                {isImageUploading && (
                  <div className='absolute w-full h-full  top-0 left-0'>
                    <Box
                      className='rounded-full bg-primary-100 filter opacity-50'
                      sx={{
                        display: 'grid',
                        width: '100%',
                        height: '100%',
                        placeContent: 'center',
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  </div>
                )}
                <img
                  className='w-full h-full rounded-full object-cover'
                  src={
                    previewSource ||
                    'https://images.unsplash.com/photo-1552234994-66ba234fd567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                  }
                  alt='Rounded avatar'
                ></img>
              </div>
            </label>
          </div>
          <ButtonComp
            containerStyle={{
              marginTop: '22px',
            }}
            title='Continue'
            variant='contained'
            buttonSize='large'
            type='button'
            onClick={() => {
              showToast({
                title: 'Terms and conditions not checked',
                subTitle:
                  'Please indicate that you have read and agree to the Terms of Service and Privacy Policy.',
                position: 'top-right',
                type: 'error',
              });
            }}
            disabled={isImageUploading}
          />
        </div>
        {/* image upload ends */}
      </div>
    </section>
  );
};

export default UploadImage;
