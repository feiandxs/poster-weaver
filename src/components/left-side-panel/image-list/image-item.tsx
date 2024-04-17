import Image from 'next/image';

export interface ImageItemProps {
  image: any;
  onImageSelect: (image: any) => void;
}

const ImageItem = (props: ImageItemProps) => {
  const { image, onImageSelect } = props;
  return (
    <div
      onClick={() => onImageSelect(image)}
      className='cursor-pointer w-32 h-24 rounded-md overflow-hidden relative hover:shadow-md hover:border hover:border-gray-400'
    >
      <Image
        src={image.urls.thumb}
        alt={image.alt_description}
        width={100}
        height={20}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export { ImageItem };
