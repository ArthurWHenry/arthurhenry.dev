import Footer from "../footer/component";
import Navigation from "../navigation/component";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
