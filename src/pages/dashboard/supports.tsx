import { supportImg } from '@/src/utils/images';
import { showPopUpMessage } from '@/src/utils/messages/popupMessages';
import { UploadOutlined } from '@ant-design/icons';
import { Input, Space, Typography } from 'antd';
import Image from 'next/image';
import { BsSendFill } from 'react-icons/bs';

const Supports = () => {
  const { Text } = Typography;
  const { TextArea } = Input;
  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };
  return (
    <div className="flex justify-center flex-col items-center mx-auto gap-4 my-10 w-fit">
      <Image src={supportImg} alt="image" />
      <div className="flex flex-col items-center justify-center gap">
        <Text className="text-center font-bold">A Little Problem?</Text>

        <div className="relative flex flex-col items-center justify-center">
          <Text className="text-primary">Report to Support Team</Text>
          <br />
          <TextArea
            showCount
            style={{ height: 80, width: 320, marginBottom: 24 }}
            onChange={onMessageChange}
            placeholder="Type here ...."
          />
          <BsSendFill
            fill="#0077B6"
            size={19}
            className="absolute left-72 top-7 z-[99] cursor-pointer"
            onClick={() => {
              showPopUpMessage({
                type: 'success',
                content: 'Message sent!',
              });
            }}
          />
          <UploadOutlined size={44} className="ml-5" />
        </div>
      </div>
    </div>
  );
};

export default Supports;
