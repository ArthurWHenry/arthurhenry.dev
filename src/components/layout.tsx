import Nav from '@/components/nav';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
