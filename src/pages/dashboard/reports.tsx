import { defaultProfile } from '@/src/utils/images';
import { LineOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, DatePicker, Space, Typography } from 'antd';
import Image from 'next/image';

const Reports = () => {
  const { RangePicker } = DatePicker;
  const { Text } = Typography;
  return (
    <div className="font-poppins flex justify-around h-screen">
      <div className="flex flex-col gap-4 w-[70%]">
        <Card className="bg-secondary">
          <div className="flex gap-5 my-3">
            <Button className="bg-primary text-white">Expenses</Button>
            <Button className="bg-secondary border-none shadow">Incomes</Button>
          </div>
          <div className="flex gap-7 my-3">
            <Button className="bg-primary w-32 text-white">Today</Button>
            <Button className="bg-secondary border-none shadow">
              This Week
            </Button>
            <Button className="bg-secondary border-none shadow">
              This Month
            </Button>
            <Space
              direction="vertical"
              size={12}
              className="bg-secondary border-none rounded-xl"
            >
              <RangePicker className="bg-inherit border-none" />
            </Space>
          </div>
          <div className="h-64 overflow-y-scroll">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex items-start py-2 border-b-2">
                  <div className="flex flex-col">
                    <Text className="text-lg font-semibold">
                      {i + 1}. Detergents
                    </Text>
                    <Text>Bought by Kristin watson</Text>
                  </div>
                  <div className="flex gap-4">
                    <Text>
                      Quantity : <span className="text-primary">125</span>
                    </Text>
                    <Text>
                      Unit Price : <span className="text-primary">1000</span>
                    </Text>
                    <Text>
                      Total : <span className="text-primary">125,000</span>
                    </Text>
                  </div>
                  <Text className="font-bold ml-10">12, Feb 2023</Text>
                </div>
              ))}
          </div>
        </Card>
        <Card className="bg-secondary">
          <Text className="font-bold text-lg">Staffs</Text>
          <div className="h-64 overflow-y-scroll relative">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex items-start py-2 border-b-2">
                  <div>
                    <Text className="font-semibold text-2xl">{i + 1}.</Text>
                    <Avatar
                      className="mx-4"
                      size={50}
                      icon={<Image src={defaultProfile} alt="image" />}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Text className="text-lg font-semibold">
                      Kristin Watson
                    </Text>
                    <Text>Lastly edited at 03 june 2022</Text>
                  </div>
                  <Text className="font-semibold">Admin</Text>
                  <Text className="text-primary absolute right-5">
                    Contract Will End On 16, July 2023
                  </Text>
                </div>
              ))}
          </div>
        </Card>
      </div>
      <div  className='flex flex-col gap-20'>
        <div>
          <Button className="h-12 w-full border-none my-4 bg-primary text-white font-semibold text-lg">
            Make a Report
          </Button>
          <Card style={{ width: 300 }} className="bg-secondary">
            <Text>Total Cost</Text>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex gap-6 justify-center">
                  <Text>1-7, Aug</Text>
                  <LineOutlined className="text-primary" />
                  <Text>1,000,000</Text>
                </div>
              ))}
          </Card>
        </div>
        <div>
          <Button className="h-12 w-full border-none my-4 bg-primary text-white font-semibold text-lg">
            Add New Staff
          </Button>
          <Card style={{ width: 300 }} className="bg-secondary text-center">
            <Text>Total Payroll</Text>
            <br />
            <Text className="text-primary">1,245,000</Text>
            <br />
            <Text>Avg. Wash By Driver/ Day</Text>
            <br />
            <Text className="text-primary">100</Text>
            <br />
            <Text>Avg. Reach Time</Text>
            <br />
            <Text className="text-primary">29 min</Text>
            <br />
            <Text>Avg. Delay Complaints/ Month</Text>
            <br />
            <Text className="text-primary">231</Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
