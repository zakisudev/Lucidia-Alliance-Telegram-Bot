import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="initial-bg w-full bg-gray-900 text-white min-h-screen font-bold gap-1 flex flex-col max-w-xl mx-auto z-0">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
