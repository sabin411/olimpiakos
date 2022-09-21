// components
import { showToast } from './Toast/toast';

// pacakges
import { useMutation } from '@apollo/client';

// graphql query
import { CREATE_UPLOAD_FILE } from '@/graphql/query.graphql';

// graphql generated types
import {
  CreateUploadFile,
  CreateUploadFileVariables,
} from '@/graphql/__generated__/CreateUploadFile';

// types
type UploadToStrapiOptions = Partial<{
  alternativeText: string;
  caption: string;
}>;

// image upload service
export function useImageUpload() {
  // const [createUploadFile, { data, loading, error }] = useMutation<
  //   CreateUploadFile,
  //   CreateUploadFileVariables
  // >(CREATE_UPLOAD_FILE, {
  //   variables: {
  //     data: {},
  //   },
  // });
  // 1. Upload to cloudinary
  // async function uploadToCloudinary(file: File) {
  //   const cloud_name = 'dyw4adgjy';
  //   const upload_preset = 'sfzeav5b';
  //   const cloudinaryData = new FormData();
  //   cloudinaryData.append('file', file);
  //   cloudinaryData.append('upload_preset', upload_preset);
  //   cloudinaryData.append('cloud_name', cloud_name);
  //   let response = await fetch(
  //     `https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
  //     {
  //       method: 'POST',
  //       body: cloudinaryData,
  //     },
  //   );
  //   return await response.json();
  // }
  // 2. Upload to strapi
  // async function uploadToStrapi(file: File, options?: UploadToStrapiOptions) {
  //   let data = await uploadToCloudinary(file);
  //   return new Promise((resolve, reject) => {
  //     createUploadFile({
  //       variables: {
  //         data: {
  //           name: data.original_filename,
  //           alternativeText: options?.alternativeText ?? 'Image',
  //           caption: options?.caption ?? 'Image',
  //           height: data.height,
  //           width: data.width,
  //           hash: data.signature,
  //           size: data.bytes,
  //           url: data.secure_url,
  //           previewUrl: data.secure_url,
  //           provider: 'cloudinary',
  //           mime: `image/${data.format}`,
  //         },
  //       },
  //     })
  //       .then(response => {
  //         resolve(response);
  //       })
  //       .catch(error => {
  //         reject(error);
  //       });
  //   });
  // }
  // return {
  //   uploadImage: uploadToStrapi,
  // };
}

// This function takes file as input and uploades the file to cloudinary
// 1. Upload to cloudinary
async function handleUpload(file: File) {
  const cloud_name = 'dyw4adgjy';
  const upload_preset = 'sfzeav5b';
  const cloudinaryData = new FormData();
  cloudinaryData.append('file', file);
  cloudinaryData.append('upload_preset', upload_preset);
  cloudinaryData.append('cloud_name', cloud_name);
  let response = await fetch(
    `https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: 'POST',
      body: cloudinaryData,
    },
  );
  return await response.json();
}

//This function is handle profile image
export async function uploadToCloudinery(
  event: React.ChangeEvent<HTMLInputElement>,
  setProfileId: React.Dispatch<React.SetStateAction<string | undefined>>,
  previewProfileImage: (file: File | null) => void,
) {
  const file: File | null =
    event.target.files?.length && event.target.files[0]
      ? event.target.files[0]
      : null;
  // if file is not null then only upload the the image
  if (file) {
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      showToast({
        title: 'Unsupported file type',
        subTitle: 'Profile image must be in jpeg or png format',
        position: 'top-right',
        type: 'error',
      });
      event.target.value = '';
      return;
    }

    if (file.size > 4000000) {
      showToast({
        title: 'Unsupported file type',
        subTitle: 'Profile image must be less than 4MB',
        position: 'top-right',
        type: 'error',
      });
      event.target.value = '';
      return;
    }

    // 1. Optimistic
    previewProfileImage(file);
    // 2. Upload to server

    // upload to cloudinary
    let data = await handleUpload(file);
    return data;

    // ! deprecated
    // try {
    //   let strapiImageResponseData = (await uploadImage(file, {
    //     alternativeText: '',
    //     caption: '',
    //   })) as {
    //     createUploadFile: { data: { id: string } };
    //   };

    //   if (strapiImageResponseData) {
    //     setProfileId(strapiImageResponseData?.createUploadFile?.data?.id);
    //     showToast({
    //       title: 'Image uploaded',
    //       subTitle: 'Profile image uploaded successfully',
    //       position: 'top-right',
    //       type: 'onSuccess',
    //     });
    //   } else {
    //     showToast({
    //       title: 'Filed to upload image',
    //       subTitle: 'Unable to upload your profile image',
    //       position: 'top-right',
    //       type: 'onError',
    //     });
    //   }
    // } catch (error) {
    //   previewProfileImage(null);
  }
}
