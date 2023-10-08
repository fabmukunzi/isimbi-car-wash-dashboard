import { supportImg } from '@/src/utils/images';
import { showPopUpMessage } from '@/src/utils/messages/popupMessages';
import { UploadOutlined } from '@ant-design/icons';
import { Input, Space, Typography } from 'antd';
import Image from 'next/image';
import { BsSendFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';
import { Form, Button } from 'antd';
import { RootState } from '@/src/store';
import { useForm } from 'antd/lib/form/Form';

const Supports = () => {
  const { Text } = Typography;
  const { TextArea } = Input;
  const [form] = useForm();
  const { user } = useSelector((state: RootState) => state.userReducer);
  const sendEmail = (value: any) => {
    var templateParams = {
      from_name: user?.firstname,
      message: value.message,
    };

    emailjs
      .send(
        'service_146cykb',
        'template_giiwqyf',
        templateParams,
        'Bx8_7S9UE47JRnKef'
      )
      .then(
        function (response) {
          showPopUpMessage({
            type: 'success',
            content: 'Message has been sent!',
          });
          form.resetFields();
        },
        function (error) {
          showPopUpMessage({
            type: 'error',
            content: 'Failed to send a message, try again',
          });
        }
      );
  };
  return (
    <div className="flex justify-center flex-col items-center mx-auto gap-4 w-fit">
      <Image src={supportImg} alt="image" />
      <div className="flex flex-col items-center justify-center gap">
        <Text className="text-center font-bold">A Little Problem?</Text>

        <Form onFinish={sendEmail}>
          <div className="relative flex flex-col items-center justify-center">
            <Text className="text-primary">Report to Support Team</Text>
            <br />
            <Form.Item
              rules={[
                { required: true, message: 'Please Provide your message' },
              ]}
              name="message"
            >
              <TextArea
                showCount
                style={{ height: 80, width: 320, marginBottom: 24 }}
                placeholder="Type here ...."
              />
            </Form.Item>
            <Button
              htmlType="submit"
              className="absolute focus:border-none left-[16.7rem] border-none top-16 z-[99] cursor-pointer"
            >
              <BsSendFill fill="#0077B6" size={19} />
            </Button>
            {/* <UploadOutlined size={44} className="ml-5" /> */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Supports;
