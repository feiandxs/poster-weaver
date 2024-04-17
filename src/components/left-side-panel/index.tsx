'use client';

import { useState, useEffect } from 'react';
import { getUnsplashImages } from '@/service/unsplash';

// types
import { Basic } from 'unsplash-js/dist/methods/photos/types';

// components
import { LeftSidePanelHeader } from './header';
import { ImageList } from './image-list';

const LeftSidePanel = () => {
  const [images, setImages] = useState<Basic[]>([]);

  useEffect(() => {
    getUnsplashImages('poster').then((data) => {
      console.log(data);
      setImages(data);
    });
  }, []);

  const onImageSelect = (image: any) => {
    console.log(image);
  };

  return (
    <div className='h-full flex flex-col justify-start items-cente w-72'>
      <LeftSidePanelHeader />
      <ImageList
        images={images}
        onImageSelect={onImageSelect}
      />
    </div>
  );
};

export { LeftSidePanel };
