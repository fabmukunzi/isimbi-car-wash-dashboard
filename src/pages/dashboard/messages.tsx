import SingleMessageView from '@/src/components/singleMessage';
import { defaultProfile } from '@/src/utils/images';
import { EnvironmentFilled } from '@ant-design/icons';
import { Badge, Button, Card, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import { BsStopwatch } from 'react-icons/bs';

const Messages = () => {
  const { Text } = Typography;
  return (
    <div className='w-screen h-screen'>
      <div className='col-span-2'>
      <Text>Messages</Text>
      <Form className='mt-2'>
        <Form.Item>
          <Input.Search placeholder="Search" className='w-[27rem]' />
        </Form.Item>
      </Form>
      </div>
      <div className='flex gap-6 justify-around'>
      <div >
        <div className="flex gap-10">
          <Badge count={11} color="green">
            <Button className="bg-primary w-28 h-10 text-white border-none font-bold">
              Clients
            </Button>
          </Badge>
          <Badge count={11} color="green">
            <Button className="bg-secondary w-28 h-10 font-bold border-none">
              Drivers
            </Button>
          </Badge>
          <Badge count={11} color="chocolate">
            <Button className="bg-secondary w-28 h-10 font-bold border-none">
              Boards
            </Button>
          </Badge>
        </div>
        <Card
          size="small"
          className="overflow-y-scroll mt-4 bg-secondary"
          style={{ width: 525, height: 610 }}
        >
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <Card
                size="small"
                key={index}
                className={`${
                  index === 2
                    ? 'bg-gradient-to-r from-secondary to-primary'
                    : ''
                } relative bg-inherit cursor-pointer border-r-0 border-l-0 border-t-0 !border-b-2 border-b-gray-300 my-3 w-full`}
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
                    <Text>
                      My wash is really delayed, i want is so fast. would....
                    </Text>
                  </div>
                </div>
                <Text className="absolute bottom-2 font-semibold right-5">
                  6 Mins
                </Text>
              </Card>
            ))}
        </Card>
      </div>
      <div className=''>
        <div className='flex gap-4'>
        <Badge count={6} color="green">
            <Button className="bg-primary w-28 h-10 text-white border-none font-bold">
              Inbox
            </Button>
          </Badge>
          <Badge count={6} color="green">
            <Button className="bg-secondary w-28 h-10 font-bold border-none">
              Sent
            </Button>
          </Badge>
        </div>
        <div className='mt-4 w-[75%]'>
        <SingleMessageView />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Messages;
