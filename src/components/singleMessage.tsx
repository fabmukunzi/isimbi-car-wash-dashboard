import { Avatar, Button, Card, Typography } from 'antd';
import { defaultProfile } from '../utils/images';
import Image from 'next/image';
import { BsArchive, BsForward, BsReply } from 'react-icons/bs';

const SingleMessageView = () => {
  const { Text } = Typography;
  return (
    <Card className='bg-secondary'>
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
          <div className="flex gap-4 my-4">
            <Button
              className="bg-secondary border-none h-9 font-semibold"
              icon={<BsReply />}
            >
              Reply
            </Button>
            <Button
              className="bg-secondary border-none h-9 font-semibold"
              icon={<BsArchive />}
            >
              Archive
            </Button>
            <Button
              className="bg-secondary border-none h-9 font-semibold"
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
                      <Text className="font-bold">Jado USABIMVURA</Text>
                      <br />
                      <Text className="font-semibold">Delivery Arrived </Text>
                      <Text>Delivery is now going to.........</Text>
                    </div>
                  </div>
                  <Text className="absolute bottom-2 font-semibold right-5">
                    24th, Feb, 2023
                  </Text>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SingleMessageView;
