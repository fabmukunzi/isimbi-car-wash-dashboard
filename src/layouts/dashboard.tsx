import { FC } from 'react';
import { Card, Typography } from 'antd';
import SideBar from '../components/sidebar';
interface ILayout {
  children: React.ReactNode;
}
const DashboardLayout: FC<ILayout> = ({ children }) => {
  return (
    <div className="font-poppins grid grid-cols-7 gap-2 h-screen w-screen">
      <div className="font-bold text-center col-span-1 my-auto h-screen ">
        <SideBar />
      </div>
      <div className="backdrop-blur-lg w-full col-span-6 p-2 mt-2">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
