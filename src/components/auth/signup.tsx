import React from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  message,
} from 'antd';
import Link from 'next/link';
import { googleIcon } from '@/src/utils/images';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSignupMutation } from '@/src/store/actions/auth';
import { useDispatch } from 'react-redux';

type ApiResponse = {
  error?: { error?: string; data?: { message: string } };
  data?: { user: any; token: string; message:string };
};
const SignupPage: React.FC = () => {
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const { Text } = Typography;
  const onFinish = async (values: any) => {
    const res = (await signup(values)) as ApiResponse;
    if (res.error) {
      messageApi.open({
        type: 'error',
        content:
          res.error.error ||
          (res.error.data && res.error.data.message) ||
          'An error occurred.',
      });
    } else if (res.data) {
      messageApi.open({
        type: 'success',
        content: res.data.message,
      });
      router.push('/');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {contextHolder}
      <Text className="text-center font-bold text-2xl">Create an account</Text>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="on"
        className="flex items-center flex-col"
      >
        <Form.Item<SignupPayload>
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: 'Please input your firstname!' }]}
        >
          <Input className="w-72" />
        </Form.Item>
        <Form.Item<SignupPayload>
          label="Last name"
          name="lastname"
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input className="w-72" />
        </Form.Item>
        <Form.Item<SignupPayload>
          label="Phone"
          name="phone"
          rules={[
            { min: 10, message: 'Please input a valid phone number!' },
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <Input className="w-72" />
        </Form.Item>
        <Form.Item<SignupPayload>
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Please input a valid email!' },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input className="w-72" />
        </Form.Item>
        <Form.Item<SignupPayload>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="w-72" />
        </Form.Item>
        <Form.Item>
          <Button
            className="rounded-lg w-72 h-10 bg-blue-500 font-bold"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Signup
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            className="rounded-lg w-72 h-10 bg-white gap-2 font-bold flex justify-center items-center"
            htmlType="submit"
          >
            <Text className="text-blue-500 text-md">Sign up With Google </Text>
            <Image alt="image" height={25} width={25} src={googleIcon} />
          </Button>
        </Form.Item>
        <Text>
          Already a member? <Link href="/">Login</Link>
        </Text>
      </Form>
    </div>
  );
};

export default SignupPage;
