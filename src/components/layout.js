import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
