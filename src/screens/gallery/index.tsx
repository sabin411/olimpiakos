import React, { useState } from 'react';

// components
import Title from '@/components/Title';
import { useLightBox } from './common';

// packages
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useQuery } from '@apollo/client';

// assets
import { imageDummy } from '@/assets/images/dummyImages';

// graphql generated types
import {
  LimitedPhotos,
  LimitedPhotosVariables,
} from '@/graphql/__generated__/LimitedPhotos';
import { GET_ALL_PHOTOS } from '@/graphql/query.graphql';
import { Photos, PhotosVariables } from '@/graphql/__generated__/Photos';
import { displayImage } from '@/utils/services';

// images
const itemData = [
  {
    img: 'https://www.cricbuzz.com/a/img/v1/595x396/i1/c242997/smriti-mandhana-struck-a-fine.jpg',
    title: 'Worlds Most Advanced Essay Outliner',
  },
  {
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1603489556890-817b0154eb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1617939532603-2905b4eeb788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1544298621-35a764866ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1627139853402-a730095065fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1620739159255-1c4cb978a0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1595663823598-931cd6b854fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Bike',
    author: '@southside_customs',
  },
];

function Gallery() {
  const [currentImage, setCurrentImage] = useState<{
    url: string;
    title?: string;
    description?: string;
  }>({
    url: '',
    title: '',
    description: '',
  });
  const { LightBox, isLightBoxOpen } = useLightBox();

  const { data: photosData } = useQuery<Photos, PhotosVariables>(
    GET_ALL_PHOTOS,
    {
      variables: {
        sort: ['createdAt:desc'],
      },
    },
  );

  return (
    <section className='container-custom my-8'>
      <LightBox
        imageLink={currentImage.url}
        description={currentImage?.description || 'No Description Available'}
        title={currentImage?.title || 'No Title Available'}
      />
      <Title containerStyle='mb-10' title='Gallery' />

      <ImageList className='' variant='masonry' cols={3} gap={8}>
        {photosData?.photos?.data
          ? photosData?.photos?.data.map((photo, i) => {
              return (
                <ImageListItem key={photo?.id}>
                  <img
                    src={`${displayImage(
                      photo.attributes?.imageUrl.data?.attributes?.url || '',
                    )}`}
                    srcSet={`${displayImage(
                      photo.attributes?.imageUrl.data?.attributes?.url || '',
                    )}`}
                    alt={photo.attributes?.title + 'image'}
                    loading='lazy'
                    onClick={() => {
                      setCurrentImage({
                        url: displayImage(
                          photo.attributes?.imageUrl.data?.attributes?.url ||
                            imageDummy,
                        ),
                        title: photo.attributes?.title,
                        description: photo.attributes?.description,
                      });
                      isLightBoxOpen(true);
                    }}
                  />
                </ImageListItem>
              );
            })
          : itemData.map(item => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading='lazy'
                  onClick={() => {
                    setCurrentImage({
                      url: item.img,
                      title: item.title,
                      description: item.author,
                    });
                    isLightBoxOpen(true);
                  }}
                />
              </ImageListItem>
            ))}
      </ImageList>
    </section>
  );
}

export default Gallery;
