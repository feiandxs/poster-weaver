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
    >
      <Image
        src={image.urls.thumb}
        alt={image.alt_description}
        width={100}
        height={100}
      />
    </div>
  );
};

export { ImageItem };
