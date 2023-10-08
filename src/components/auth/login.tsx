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
import { useLoginMutation } from '@/src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/src/store/reducers/users';
import { useSearchParams } from 'next/navigation';
import { showPopUpMessage } from '@/src/utils/messages/popupMessages';
import { BASE_API_URL } from '@/src/utils/constants';

type ApiResponse = {
  error?: { error?: string; data?: { message: string } };
  data?: { user: any; token: string };
};
const LoginPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  const userQ = searchParams.get('user');
  let user: any;
  if (userQ) user = JSON.parse(userQ);
  const [login, { isLoading }] = useLoginMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const { Text } = Typography;
  const onFinish = async (values: any) => {
    const res = (await login(values)) as ApiResponse;
    if (res.error) {
      showPopUpMessage({
        type: 'warning',
        content:
          res.error.error ||
          (res.error.data && res.error.data.message) ||
          'An error occurred.',
      });
    } else if (res.data) {
      localStorage.setItem('car_wash_token', res.data.token);
      dispatch(updateUser(res.data.user));
      router.push('/dashboard');
    }
  };

  if (token) {
    localStorage.setItem('car_wash_token', token);
    dispatch(updateUser(user));
    router.push('/dashboard');
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {contextHolder}
      <Text className="text-center font-bold text-2xl">
        <span className="text-white">Welcome Back , </span>Login
      </Text>
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
          rules={[
            { type: 'email', message: 'Please input a valid email!' },
            { required: true, message: 'Please input your email!' },
          ]}
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

        <Link href="#" className="-mt-3 mb-5 -mr-44 text-white">
          Forgot password?
        </Link>

        <Form.Item>
          <Button
            className="rounded-lg w-72 h-10 bg-blue-500 font-bold"
            type="primary"
            htmlType="submit"
            loading={isLoading}
            // onClick={() => router.push('/dashboard')}
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            className="rounded-lg w-72 h-10 bg-white gap-2 font-bold flex justify-center items-center"
            onClick={() =>
              (window.location.href = `${BASE_API_URL}/users/auth/google`)
            }
          >
            <Text className="text-blue-500 text-md">Sign in With Google </Text>
            <Image alt="image" height={25} width={25} src={googleIcon} />
          </Button>
        </Form.Item>
        <Link href="/signup">Create an account</Link>
      </Form>
    </div>
  );
};

export default LoginPage;
