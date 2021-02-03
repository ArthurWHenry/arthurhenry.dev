import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
  href: string;
};

const ActiveLink = ({ children, href }: Props) => {
  const router = useRouter();

  const linkClasses = classNames('transition', 'p-2', {
    'text-gray-50': router.pathname === href,
    'text-gray-400 hover:text-gray-50': router.pathname !== href
  });

  return (
    <Link href={href}>
      <a className={linkClasses}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
