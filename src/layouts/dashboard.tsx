import { FC } from 'react';
import { Card, Typography } from 'antd';
import SideBar from '../components/sidebar';
interface ILayout {
  children: React.ReactNode;
}
const DashboardLayout: FC<ILayout> = ({ children }) => {
  return (
    <div className="font-poppins flex gap-4">
      <div className="font-bold text-center my-0 h-screen w-1/6">
        <SideBar />
      </div>
      <div className="backdrop-blur-lg w-screen p-2 mt-2">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
