import Image from 'next/image';
import { ImageItem } from './image-item';

export interface ImageListProps {
  images: any[];
  onImageSelect: (image: any) => void;
}

const ImageList = (props: ImageListProps) => {
  const { images, onImageSelect } = props;
  return (
    <div className='grid grid-cols-2 gap-4 gap-y-4 pt-4'>
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          onImageSelect={onImageSelect}
        />
      ))}
    </div>
  );
};
export { ImageList };
