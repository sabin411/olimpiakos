import React, { useState } from 'react';

// components
import Button from '@/components/Button';

// packages
import Cookies from 'universal-cookie';
import { Box, CircularProgress, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// common
import EditProfile from './EditProfile';

// types
import { whatToUpdateProps } from './types';

// constants
import { profile } from '@/constants';

// utils
import { displayImage, uploadToCloudinery } from '@/utils/services';
import { useMutation } from '@apollo/client';
import {
  CreateUploadFile,
  CreateUploadFileVariables,
} from '@/graphql/__generated__/CreateUploadFile';
import { CREATE_UPLOAD_FILE } from '@/graphql/query.graphql';
import { showToast } from '@/utils/Toast/toast';
import {
  UpdateUserInfo,
  UpdateUserInfoVariables,
} from '@/graphql/__generated__/UpdateUserInfo';
import { UPDATE_USER_INFORMATION } from '@/graphql/mutation.graphql';

// styles
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--primary-900)',
  boxShadow: 24,
};

// Modal form for editing profile
const ModalForm = ({
  open,
  handleClose,
  whatToUpdate,
  setOpenModal,
}: {
  open: boolean;
  handleClose: () => void;
  whatToUpdate: whatToUpdateProps;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='py-5 px-4' sx={style}>
        <h5 className='text-neutral-300'>Update Profile</h5>
        <EditProfile whatToUpdate={whatToUpdate} setOpenModal={setOpenModal} />
      </Box>
    </Modal>
  );
};

const Profile = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [previewSource, setPreviewSource] = useState<string | null>(null);
  const name = cookies.get('fullName');
  const phoneNumber = cookies.get('phoneNumber');
  const userName = cookies.get('userName');
  const email = cookies.get('email');
  const profilePic = cookies.get('profilePic');
  const userInfoId = cookies.get('userInfoId');
  const [currentUpdateInfo, setCurrentUpdateInfo] =
    React.useState<whatToUpdateProps>('EMAIL');
  const wrapperStyle = 'flex items-center justify-between gap-x-4';
  const labelStyle = 'font-regular text-neutral-500 text-s';
  const valueStyle = 'font-regular text-neutral-300 text-p md:text-h6';
  const containerStyle = {
    backgroundColor: 'var(--primary-700)',
  };

  const [updateUserInfoQuery] = useMutation<
    UpdateUserInfo,
    UpdateUserInfoVariables
  >(UPDATE_USER_INFORMATION, {
    onCompleted: data => {
      cookies.set(
        'profilePic',
        data.updateUserInformation?.data?.attributes?.profilePic.data
          ?.attributes?.url,
      );
    },
    onError: err => {
      showToast({
        title: profile.errorMessage.failedToChangeProfilePic,
        subTitle: err?.message,
        type: 'error',
      });
    },
  }); // update query for updating user information

  const [createUploadFile] = useMutation<
    CreateUploadFile,
    CreateUploadFileVariables
  >(CREATE_UPLOAD_FILE, {
    onError: error => {
      showToast({
        title: profile.errorMessage.unableToUploadPhoto,
        subTitle: error?.message,
        position: 'top-right',
        type: 'error',
      });
    },
  }); //

  // handle logout
  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('userName');
    cookies.remove('email');
    cookies.remove('fullName');
    cookies.remove('profilePic');
    cookies.remove('userInfoId');
    cookies.remove('phoneNumber');
    cookies.remove('ugid');
    navigate('/login');
  };

  // handle open edit modal form
  const handleOpenModal = (whatToUpdate: whatToUpdateProps) => {
    setOpenModal(true);
    setCurrentUpdateInfo(whatToUpdate);
  };

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
    uploadToCloudinery(event, setIsImageUploading, previewProfileImage)
      .then(data => {
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
            if (res.data?.createUploadFile?.data?.id) {
              updateUserInfoQuery({
                variables: {
                  data: {
                    profilePic: res.data?.createUploadFile?.data?.id,
                  },
                  updateUserInformationId: userInfoId,
                },
              });
              setIsImageUploading(false);
              showToast({
                title: profile.successMessage.successfullyUploaded,
                type: 'success',
              });
            }
          })
          .catch(err => {
            setIsImageUploading(false);
          });
      })
      .catch(error => {
        showToast({
          title: profile.errorMessage.unableToUploadPhoto,
          position: 'top-right',
          type: 'error',
        });
      });
  };

  return (
    <>
      <ModalForm
        handleClose={() => {
          setOpenModal(false);
        }}
        whatToUpdate={currentUpdateInfo}
        open={openModal}
        setOpenModal={setOpenModal}
      />
      <section className='container-custom'>
        <div className='lg:w-[800px] mx-auto mt-[50px] md:mt-[128px] '>
          <div className='relative h-14'>
            <input
              type='file'
              id='profilePic'
              name='profilePic'
              className='w-14 h-14 opacity-0'
              onChange={e => handleUpload(e)}
            />
            <div className='absolute top-0 left-0 flex items-start'>
              <label
                className='border-primary-100 cursor-pointer rounded-lg border-2 hover:border-2 hover:border-secondary-700'
                htmlFor='profilePic'
              >
                {isImageUploading && (
                  <Box
                    className='w-14 h-14 absolute top-0 left-0  rounded object-cover'
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  className='w-14 h-14  rounded object-cover'
                  src={previewSource ?? displayImage(profilePic)}
                  alt='Default avatar'
                />
              </label>
              <div className='ml-4'>
                <h5 className='text-h6 font-semi-bold text-neutral-300'>
                  {name}
                </h5>
                <p className='text-s font-regular text-neutral-500'>
                  {phoneNumber}
                </p>
              </div>
            </div>
          </div>

          {/* main bodya sectoin starts */}
          <div className='w-full bg-primary-900 rounded-lg p-7 mt-10 flex flex-col gap-y-7'>
            {/* Full Name */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Display name</p>
                <h5 className={valueStyle}>{name}</h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Edit'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('NAME')}
              />
            </div>
            {/* email */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Email</p>
                <h5 className={valueStyle}>{email}</h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Edit'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('EMAIL')}
              />
            </div>
            {/* phoneNumber */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Phone Number</p>
                <h5 className={valueStyle}>{phoneNumber}</h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Edit'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('PHONE')}
              />
            </div>
            {/* user name */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>User Name</p>
                <h5 className={valueStyle}>{userName}</h5>
              </div>
            </div>
            {/* password */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Password</p>
                <h5 className='text-h6 font-semi-bold text-neutral-300 flex justify-center items-center gap-x-2 py-2'>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                </h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Change'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('PASSWORD')}
              />
            </div>
          </div>
          {/* main bodya sectoin ends */}
          <Button
            containerStyle={{
              ...containerStyle,
              marginInline: 'auto',
              display: 'block',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
            buttonSize='medium'
            title='Sign out'
            variant='contained'
            type='button'
            onClick={() => {
              logout();
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
