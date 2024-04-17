'use client';

import { useState, useEffect } from 'react';
import { getUnsplashImages } from '@/service/unsplash';

// types
import { Basic } from 'unsplash-js/dist/methods/photos/types';

// components
import { LeftSidePanelHeader } from './header';
import { ImageList } from './image-list';
import { LeftSideBottom } from './bottom';

const LeftSidePanel = () => {
  const [images, setImages] = useState<Basic[]>([]);

  useEffect(() => {
    getUnsplashImages('scenery').then((data) => {
      console.log(data);
      setImages(data);
    });
  }, []);

  const onImageSelect = (image: any) => {
    console.log(image);
  };

  return (
    <div className='h-screen flex flex-col justify-start items-center w-72'>
      <LeftSidePanelHeader />
      <div className='flex-1 overflow-y-auto w-full flex justify-center'>
        <ImageList
          images={images}
          onImageSelect={onImageSelect}
        />
      </div>
      <LeftSideBottom />
    </div>
  );
};

export { LeftSidePanel };
