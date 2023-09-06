import { FC } from 'react';
import { Card, Typography } from 'antd';
import SideBar from '../components/sidebar';
interface ILayout {
  children: React.ReactNode;
}
const DashboardLayout: FC<ILayout> = ({ children }) => {
  const { Text } = Typography;
  return (
    <div className="font-poppins overflow-hidden min-h-full flex justify-start gap-2">
      <div className="font-bold text-center my-auto">
        <SideBar />
      </div>
      <Card className="backdrop-blur-lg bg-gray-100/30">
        <div className="w-80">{children}</div>
      </Card>
    </div>
  );
};

export default DashboardLayout;
