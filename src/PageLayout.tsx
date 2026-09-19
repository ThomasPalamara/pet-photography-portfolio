import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Nav';

const PageLayout = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default PageLayout;
