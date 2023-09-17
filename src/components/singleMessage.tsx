import { Avatar, Button, Card, Input, Typography } from 'antd';
import { defaultProfile } from '../utils/images';
import Image from 'next/image';
import { BsArchive, BsForward, BsReply, BsSendFill } from 'react-icons/bs';
import { useState } from 'react';
import { SendOutlined, UploadOutlined } from '@ant-design/icons';
import { showPopUpMessage } from '../utils/messages/popupMessages';

const SingleMessageView = () => {
  const { Text } = Typography;
  const { TextArea } = Input;
  const [onReply, setOnReply] = useState(true);
  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };
  return (
    <Card style={{height:610}} className="bg-secondary overflow-y-scroll">
      <div>
        <Avatar size={52} src={<Image src={defaultProfile} alt="avatar" />} />
        <Text className="text-xl font-semibold ml-5">Robert Fox</Text>
        <div>
          <div className="my-4">
            <br />
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <br />
          </div>
          <Text className="font-semibold">Attachements</Text>
          <br />
          <div className="flex gap-4 my-4">
            {Array(4)
              .fill(null)
              .map((_, index) => {
                return <Avatar size={100} className="rounded-md" key={index} />;
              })}
          </div>
          <Text className="cursor-pointer text-primary hover:text-blue-300">
            View All Attachements
          </Text>
          <br />
          {onReply && (
            <div className="relative">
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
                  setOnReply(false);
                  showPopUpMessage({
                    type: 'success',
                    content: 'Message sent!',
                  });
                }}
              />
              <UploadOutlined size={44} className="ml-5" />
            </div>
          )}
          <div className="flex gap-4 my-4">
            <Button
              className="bg-secondary_dark border-none h-9 font-semibold"
              icon={<BsReply />}
              onClick={() => setOnReply(true)}
            >
              Reply
            </Button>
            <Button
              className="bg-secondary_dark border-none h-9 font-semibold"
              icon={<BsArchive />}
            >
              Archive
            </Button>
            <Button
              className="bg-secondary_dark border-none h-9 font-semibold"
              icon={<BsReply />}
            >
              Forward
            </Button>
          </div>
          <Text>Previous Messages</Text>
          <div className="h-24 overflow-y-scroll">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <Card
                  size="small"
                  key={index}
                  className={`relative bg-inherit cursor-pointer border-r-0 border-l-0 border-t-0 !border-b-2 border-b-gray-300 my-3 w-full`}
                >
                  {/* <p>{index}</p> */}
                  <div className="flex items-center gap-5">
                    <Image
                      className="rounded-full w-10 h-10"
                      src={defaultProfile}
                      alt="image"
                    />
                    <div>
                      <Text className="font-bold mr-3">Jado</Text>
                      <Text className="font-semibold mr-3">
                        Delivery Arrived{' '}
                      </Text>
                      <Text>Delivery is now going to.........</Text>
                      <Text className="absolute right-2 font-semibold">
                        24th, Feb, 2023
                      </Text>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SingleMessageView;
