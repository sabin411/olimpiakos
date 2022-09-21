export function useImageUpload() {
  const { mutate: uploadServer } = useCreateUploadFileMutation();

  // 1. Upload to cloudinary
  async function uploadToCloudinary(file: File) {
    const cloud_name = 'dyw4adgjy';
    const upload_preset = 'funOlympic';
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

  // 2. Upload to strapi
  async function uploadToStrapi(file: File, options?: UploadToStrapiOptions) {
    let data = await uploadToCloudinary(file);
    return new Promise((resolve, reject) => {
      uploadServer(
        {
          data: {
            name: data.original_filename,
            alternativeText: options?.alternativeText ?? 'Image',
            caption: options?.caption ?? 'Image',
            height: data.height,
            width: data.width,
            hash: data.signature,
            size: data.bytes,
            url: data.secure_url,
            previewUrl: data.secure_url,
            provider: 'cloudinary',
            mime: `image/${data.format}`,
          },
        },
        {
          onSuccess: data => resolve(data),
          onError: err => reject(err),
        },
      );
    });
  }

  return {
    uploadImage: uploadToStrapi,
  };
}
