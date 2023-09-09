import { FC } from 'react';
import { Card, Typography } from 'antd';
import SideBar from '../components/sidebar';
interface ILayout {
  children: React.ReactNode;
}
const DashboardLayout: FC<ILayout> = ({ children }) => {
  const { Text } = Typography;
  return (
    <div className="font-poppins flex gap-2 h-screen overflow-hidden">
      <div className="font-bold text-center my-auto h-screen w-[15%]">
        <SideBar />
      </div>
      <div className="backdrop-blur-lg w-full p-6 mt-5">
        <div className="w-80">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
