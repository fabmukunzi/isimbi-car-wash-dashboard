import { Modal, Card, Button, Typography, Input, Form, message } from 'antd';
import { FC, useState } from 'react';
import { defaultProfile } from '../utils/images';
import Image from 'next/image';
import { DeleteOutlined, EditFilled, WarningFilled } from '@ant-design/icons';
import { showPopUpMessage } from '../utils/messages/popupMessages';

interface ModelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const ProfileModal: FC<ModelProps> = ({ isOpen, setIsOpen }) => {
  const { Text } = Typography;
  const { confirm, destroyAll } = Modal;
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleCancelPassword = () => {
    setShowChangePassword(false);
  };
  const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete this Account?',
      icon: <WarningFilled />,
      footer: [
        <div key="footer" className="flex justify-end gap-3">
          <Button onClick={destroyAll} className="w-24 h-10 rounded-">
            Cancel
          </Button>
          <Button className="bg-primary text-white w-24 h-10 rounded-">
            Delete
          </Button>
        </div>,
      ],
      onOk() {
        console.log('OK');
      },
    });
  };
  return (
    <Modal
      title="Profile"
      open={isOpen}
      onCancel={handleCancel}
      footer={[
        <div key="footer">
          <Button className="bg-primary text-white w-24 h-10 rounded-3xl">
            Save
          </Button>
          <Button onClick={handleCancel} className="w-24 h-10 rounded-3xl">
            Cancel
          </Button>
        </div>,
      ]}
    >
      {contextHolder}
      <Modal
        title="Change Password!"
        open={showChangePassword}
        onCancel={handleCancelPassword}
        width={255}
        footer={[
          <div key="footer">
            <Button
              onClick={() => {
                setShowChangePassword(false);
                showPopUpMessage({
                  type: 'success',
                  content: 'Password Changed!',
                });
              }}
              className="bg-primary text-white w-24 h-10 rounded-3xl"
            >
              Save
            </Button>
            <Button
              onClick={handleCancelPassword}
              className="w-24 h-10 rounded-3xl"
            >
              Cancel
            </Button>
          </div>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="New Password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
      <Card>
        <div className="flex gap-7">
          <Image
            src={defaultProfile}
            alt="image"
            className="w-28 h-28 rounded-lg object-cover"
          />
          <div className="text-xl">
            <Button
              onClick={showConfirm}
              type="primary"
              icon={<DeleteOutlined />}
              className="h-10 bg-secondary flex flex-row-reverse items-center justify-between gap-4 text-black font-bold"
            >
              Delete Account
            </Button>
            <br />
            <Text>Account Since</Text>
            <br />
            <Text className="text-primary">12 feb, 2023</Text>
          </div>
        </div>
        <div className="flex flex-col justify-start mt-3">
          <Form layout="vertical">
            <Form.Item label="Full Name">
              <Input value="Fabrice Mukunzi" />
            </Form.Item>
            <Form.Item label="Email">
              <Input value="mukunzifabrice77@gmail.com" />
            </Form.Item>
            <Form.Item label="Telephone">
              <Input value="0780403244" />
            </Form.Item>
            <div className="flex items-center w-full justify-between">
              <Form.Item label="Password" className="w-[90%]">
                <Input.Password value="passwod" />
              </Form.Item>
              <EditFilled
                onClick={() => setShowChangePassword(true)}
                className="cursor-pointer"
              />
            </div>
          </Form>
        </div>
      </Card>
    </Modal>
  );
};

export default ProfileModal;
