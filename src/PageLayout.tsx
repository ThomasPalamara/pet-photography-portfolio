import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Footer from './components/Navigation/Footer';
import ScrollToTop from './components/ScrollToTop';

const PageLayout = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Nav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
