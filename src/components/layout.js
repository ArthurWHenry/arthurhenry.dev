import Footer from './footer';
import Navigation from './navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
