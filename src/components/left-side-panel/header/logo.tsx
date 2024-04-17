import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <div className='pr-16 cursor-pointer'>
    <Link
      href='/'
    >
      <Image
        src='/logo/logo.png'
        alt='logo'
        width={371}
        height={62}
      />
    </Link>

  </div>
);

export { Logo };
