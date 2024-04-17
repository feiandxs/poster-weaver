import Image from 'next/image';

const Logo = () => (
  <div className='logo'>
    <Image
      src='/logo/logo.png'
      alt='logo'
      width={371}
      height={62}
    />
  </div>
);

export { Logo };
