import React, { FC, useState } from 'react';
import {
  Modal,
  Card,
  Image,
  Button,
  Typography,
  Input,
  Form,
  message,
  Badge,
  Upload,
} from 'antd';
import {
  WarningFilled,
  UploadOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { formatDate } from '../utils/formatdate';
import {
  useChangePasswordMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/reducers/users';
import { useForm } from 'antd/lib/form/Form';

interface ModelProps {
  isOpen: boolean;
  user: any;
  setIsOpen: (isOpen: boolean) => void;
}

const ProfileModal: FC<ModelProps> = ({ user, isOpen, setIsOpen }) => {
  const { Text } = Typography;
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const resp = useGetUserProfileQuery();
  const [updateUserprofile, { isLoading: uload }] =
    useUpdateUserProfileMutation();
  const [changePassword, { isLoading: pload }] = useChangePasswordMutation();
  const { data } = resp;
  const [form] = useForm();
  const dispatch = useDispatch();
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleCancelPassword = () => {
    setShowChangePassword(false);
  };

  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you Want to delete this Account?',
      icon: <WarningFilled />,
      onOk() {
        console.log('OK');
      },
    });
  };

  const handleAvatarChange = (info: any) => {
    const file = info.fileList[0].originFileObj;
    console.log(info);
    setAvatarFile(file);
  };
  const handleUpdate = async (values: any) => {
    const formData = new FormData();
    formData.append('firstname', values.firstname);
    formData.append('lastname', values.lastname);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    if (avatarFile) {
      formData.append('avatar', avatarFile);
    }
    await updateUserprofile({ body: formData });
    (await resp.refetch()).data?.user;
    form.resetFields();
    dispatch(updateUser((await resp.refetch()).data?.user));
    handleCancel();
  };
  const handlePassword = async (values: any) => {
    const res: any = await changePassword({
      old_password: values.old_password,
      new_password: values.new_password,
    });
    if ('error' in res) return message.error('Failed to change passowrd');
    message.success('Password changed!');
    setShowChangePassword(false);
  };

  return (
    <Modal
      title="Profile"
      className="-mt-10"
      open={isOpen}
      onCancel={handleCancel}
      footer={[]}
    >
      {contextHolder}
      <Modal
        title="Change Password!"
        open={showChangePassword}
        onCancel={handleCancelPassword}
        width={255}
        footer={[]}
      >
        <Form form={form} layout="vertical" onFinish={handlePassword}>
          <Form.Item label="Old Password" name="old_password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="New Password" name="new_password">
            <Input.Password />
          </Form.Item>
          <div className="flex justify-center gap-5">
            <Button
              htmlType="submit"
              loading={pload}
              className="bg-primary text-white w-32 h-10 rounded-3xl"
            >
              Save
            </Button>
            <Button
              onClick={handleCancelPassword}
              className="w-32 h-10 rounded-3xl"
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
      <Card>
        <div className="flex gap-7">
          <div className="flex flex-col gap-3 items-start">
            <Image
              src={user?.avatar as string | undefined}
              alt="image"
              width={120}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="w-48">
              <Upload
                beforeUpload={() => false}
                onChange={handleAvatarChange}
                className="truncate"
                accept="image/*"
              >
                <Button
                  icon={<UploadOutlined />}
                  className="avatar-upload-button"
                >
                  Upload Avatar
                </Button>
              </Upload>
            </div>
          </div>
          <div className="text-xl">
            {user?.role !== 'Super Admin' && (
              <Button
                onClick={showConfirm}
                type="primary"
                icon={<DeleteOutlined />}
                className="h-10 bg-secondary flex flex-row-reverse items-center justify-between gap-4 text-black font-bold"
              >
                Delete Account
              </Button>
            )}
            <br />
            <Text>Account Since</Text>
            <br />
            <Text className="text-primary">{formatDate(user?.createdAt)}</Text>
          </div>
        </div>
        <div className="flex flex-col justify-start mt-3">
          <Form layout="vertical" onFinish={handleUpdate} initialValues={user}>
            <div className="flex justify-between">
              <Form.Item label="First name" name="firstname">
                <Input />
              </Form.Item>
              <Form.Item label="Last name" name="lastname">
                <Input />
              </Form.Item>
            </div>
            <div className="flex justify-between w-full">
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
              <Form.Item label="Telephone" name="phone">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center w-full justify-between">
              {user?.passowrd && (
                <Button
                  onClick={() => setShowChangePassword(true)}
                  className="cursor-pointer bg-primary text-white"
                >
                  Change Password
                </Button>
              )}
            </div>
            <div className="flex justify-center gap-5">
              <Button
                htmlType="submit"
                loading={uload}
                className="bg-primary text-white w-32 h-10 rounded-3xl"
              >
                Save
              </Button>
              <Button onClick={handleCancel} className="w-32 h-10 rounded-3xl">
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </Modal>
  );
};

export default ProfileModal;
