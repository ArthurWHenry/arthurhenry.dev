import Image from 'next/image';
import ActiveLink from '@/components/active-link';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center text-gray-50 max-w-xl mx-auto p-6">
      <Image src="/logo.png" alt="Arthur Henry logo." width={40} height={40} />
      <div>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
      </div>
    </nav>
  );
};

export default Nav;
