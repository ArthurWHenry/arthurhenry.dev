import Nav from '@/components/nav';
import Footer from './footer';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
