import React, { useState } from 'react';
import {
  Button,
  Card,
  DatePicker,
  Space,
  Typography,
  Badge,
  Avatar,
  Input,
} from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';
import { BsStopwatch } from 'react-icons/bs';
import { defaultProfile } from '@/src/utils/images';
import Image from 'next/image';

const Home = () => {
  const { Text } = Typography;
  const { RangePicker } = DatePicker;
  const [activeRole, setActiveRole] = useState('clients');
  return (
    <div className="flex h-screen gap-4  justify-between">
      <div className="">
        <div className="w-full flex gap-4">
          <Button className="bg-secondary border-none rounded-xl">Today</Button>
          <Button className="bg-secondary border-none rounded-xl">
            This Week
          </Button>
          <Button className="bg-secondary border-none rounded-xl">
            This Month
          </Button>
          {/* <Button className=" border-none rounded-xl"> */}
          <Space
            direction="vertical"
            size={12}
            className="bg-secondary border-none rounded-xl"
          >
            <RangePicker className="bg-inherit border-none" />
          </Space>
          {/* </Button> */}
        </div>
        <div className="flex w-full gap-6 my-4">
          <Card
            className="w-full text-center bg-secondary"
            style={{ width: 250, height: 100 }}
          >
            <Text className="text-primary text-2xl font-bold">112</Text>
            <br />
            <Text className="font-semibold">Waiting on Queue</Text>
          </Card>
          <Card
            className="w-full text-center bg-secondary"
            style={{ width: 250, height: 100 }}
          >
            <Text className="text-primary text-2xl font-bold">112</Text>
            <br />
            <Text className="font-semibold">Completed Wash</Text>
          </Card>
          <Card
            className="w-full text-center bg-secondary"
            style={{ width: 250, height: 100 }}
          >
            <Text className="text-primary text-2xl font-bold">112</Text>
            <br />
            <Text className="font-semibold">Cancelled Orders</Text>
          </Card>
        </div>
        <div className="w-[50rem] h-80 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15950.34686032!2d30.054956999999995!3d-1.91641695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1694286992183!5m2!1sen!2srw"
            className="border-none w-full h-full rounded-lg"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="">
          <div className="flex items-center gap-4 my-4">
            <Text>Messages</Text>
            <Input.Search placeholder="Search" className="w-64" />
          </div>
          <div>
            <div className="flex gap-10">
              <Badge count={11} color="green">
                <Button className="bg-primary w-24 h-8 text-white border-none font-bold">
                  Clients
                </Button>
              </Badge>
              <Badge count={11} color="green">
                <Button className="bg-secondary w-24 h-8 font-bold border-none">
                  Drivers
                </Button>
              </Badge>
              <Badge count={11} color="chocolate">
                <Button className="bg-secondary w-24 h-8 font-bold border-none">
                  Boards
                </Button>
              </Badge>
            </div>
            <div className="mt-5 h-44 w-full overflow-y-scroll">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Card
                    key={index}
                    className="relative bg-secondary my-3 w-full"
                  >
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
                          Complaint: My wash is really delayed, i want is so
                          fast. would My wash is really delayed......
                        </Text>
                      </div>
                    </div>
                    <Text className="absolute top-2 right-5">6 Mins</Text>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-[27%]'>
        <Card className="bg-secondary text-center">
          <div className="mb-4 flex flex-col">
            <Text className="font-semibold text-lg">Average Reach Time</Text>
            <br />
            <Text className="text-primary font-bold text-2xl py-2">
              31 <span className="text-base">min</span> 12{' '}
              <span className="text-base">sec</span>
            </Text>
            <br />
            <Text className="font-semibold text-lg">Average Wash Time</Text>
            <br />
            <Text className="text-primary font-bold text-2xl mt-4">
              31 <span className="text-base">min</span> 12{' '}
              <span className="text-base">sec</span>
            </Text>
          </div>
        </Card>
        <div className="flex items-center gap-4 my-4">
          <Text>Queue</Text>
          <Input.Search placeholder="Search" className="w-56" />
        </div>
        <div>
          <div className="flex justify-between">
            <Badge count={5} color="green">
              <Button
                onClick={() => setActiveRole('clients')}
                className={`${
                  activeRole === 'clients'
                    ? 'bg-primary text-white'
                    : 'bg-secondary'
                } w-28 h-10 border-none font-bold`}
              >
                Clients
              </Button>
            </Badge>
            <Badge count={5} color="chocolate">
              <Button
                onClick={() => setActiveRole('drivers')}
                className={`${
                  activeRole === 'drivers'
                    ? 'bg-primary text-white'
                    : 'bg-secondary'
                } w-28 h-10 font-bold border-none`}
              >
                Drivers
              </Button>
            </Badge>
          </div>
          <div className="mt-4 h-[27rem] flex flex-col gap-4 overflow-scroll">
            {activeRole === 'clients' ? (
              <>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Card key={index} className="relative bg-secondary">
                      <div className="flex flex-col">
                        <Text>Jado USABIMVURA</Text>
                        <Text className="flex items-center gap-2">
                          <EnvironmentFilled className="text-primary" /> 3890
                          Popular DR.
                        </Text>
                        <Text className="flex items-center gap-2">
                          <BsStopwatch />
                          03:45 PM
                        </Text>
                      </div>
                      <Text className="absolute top-2 right-5">6 Mins</Text>
                    </Card>
                  ))}
              </>
            ) : (
              <>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Card key={index} className="relative bg-secondary">
                      <div className="flex flex-col">
                        <Text>Jado USABIMVURA</Text>
                        <Text className="flex items-center gap-2">
                          <EnvironmentFilled className="text-primary" /> 3890
                          Popular DR.
                        </Text>
                        <Text className="flex items-center gap-2">
                          <BsStopwatch />
                          03:45 PM
                        </Text>
                      </div>
                      <Card
                        size="small"
                        className="absolute text-center top-2 right-2 text-primary"
                      >
                        On his way
                        <br />
                        00:21
                      </Card>
                    </Card>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
