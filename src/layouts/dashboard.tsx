import { FC } from 'react';
import { Card, Typography } from 'antd';
import SideBar from '../components/sidebar';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { UserSchema } from '../utils/types/user';
interface ILayout {
  children: React.ReactNode;
}
const DashboardLayout: FC<ILayout> = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.userReducer);
  if (!localStorage.getItem('car_wash_token') || !user) router.push('/');
  return (
    <div className="font-poppins flex gap-4">
      <div className="font-bold text-center my-0 h-screen w-1/6 relative">
        <SideBar />
      </div>
      <div className="backdrop-blur-lg w-screen p-2 mt-2">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
