import { FC } from 'react';
import { Card, Typography } from 'antd';
interface ILayout {
  children: React.ReactNode;
}
const AuthLayout: FC<ILayout> = ({ children }) => {
  const { Text } = Typography;
  return (
    <div className="auth font-poppins overflow-hidden py-40 min-h-full flex justify-between px-20">
      <div className='font-bold w-[24rem] text-center my-auto'>
        <Text className='text-center text-white text-3xl'>A New And Convenient Way To Give Your Car a Treat!</Text>
      </div>
      <Card className="backdrop-blur-lg bg-gray-100/30">
        <div className="w-80">{children}</div>
      </Card>
    </div>
  );
};

export default AuthLayout;
