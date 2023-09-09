import React from 'react';
import { Avatar, Button, Checkbox, Form, Input, Typography } from 'antd';
import Link from 'next/link'
import { googleIcon } from '@/src/utils/images';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  const { Text } = Typography;
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='flex flex-col items-center gap-6'>
      <Text className='text-center font-bold text-2xl'><span className='text-white'>Welcome Back , </span>Login</Text>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="on"
        className="flex items-center flex-col"
      >
        <Form.Item<LoginPayload>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input className="py-2 w-72" />
        </Form.Item>

        <Form.Item<LoginPayload>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="py-2 w-72" />
        </Form.Item>

        <Link href="#" className='-mt-3 mb-5 -mr-44 text-white'>Forgot password?</Link>

        <Form.Item>
          <Button className='rounded-lg w-72 h-10 bg-blue-500 font-bold' type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          <Button className='rounded-lg w-72 h-10 bg-white gap-2 font-bold flex justify-center items-center' htmlType="submit">
            <Text className='text-blue-500 text-md'>Sign in With Google </Text>
            <Image alt="image" height={25} width={25} src={googleIcon} />
          </Button>
        </Form.Item>
        <Link href="/signup">Create an account</Link>
      </Form>
    </div>
  );
};

export default LoginPage;
