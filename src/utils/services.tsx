// components
import { showToast } from './Toast/toast';

// constants
import { signUp } from '@/constants/en';

// packages
import { BASE_URL } from '@/env';

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
  setImageLoading: React.Dispatch<React.SetStateAction<boolean>>,
  previewProfileImage: (file: File | null) => void,
) {
  const { errorMessages } = signUp.uploadImage;
  const file: File | null =
    event.target.files?.length && event.target.files[0]
      ? event.target.files[0]
      : null;
  // if file is not null then only upload the the image
  if (file) {
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      showToast({
        title: errorMessages.fileFormat,
        subTitle: errorMessages.fileFormatSubtitle,
        position: 'top-right',
        type: 'error',
      });
      event.target.value = '';
      setImageLoading(false);
      return;
    }

    if (file.size > 4000000) {
      showToast({
        title: errorMessages.fileSize,
        subTitle: errorMessages.fileSizeSubTitle,
        position: 'top-right',
        type: 'error',
      });
      event.target.value = '';
      setImageLoading(false);
      return;
    }

    // 1. Optimistic
    previewProfileImage(file);
    // 2. Upload to server

    // upload to cloudinary
    let data = await handleUpload(file);
    return data;
  }
}

// This function loggs out the user

export function displayImage(imageUrl: string) {
  return imageUrl.includes('http') ? imageUrl : BASE_URL + imageUrl;
}
