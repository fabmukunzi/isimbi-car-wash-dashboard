import { FC } from 'react';
import { Card, Typography } from 'antd';
interface ILayout {
  children: React.ReactNode;
}
const AuthLayout: FC<ILayout> = ({ children }) => {
  const { Text } = Typography;
  return (
    <div className="auth font-poppins overflow-hidden h-screen flex justify-between items-center px-20">
      <div className="font-bold w-[24rem] text-center my-auto">
        <Text className="text-center text-white text-3xl">
          Book Now And Get A Wash In <span className='text-primary'>30 Mins</span>
        </Text>
      </div>
      <Card className="backdrop-blur-lg bg-gray-100/30 h-fit">
        <div className="w-80">{children}</div>
      </Card>
    </div>
  );
};

export default AuthLayout;
