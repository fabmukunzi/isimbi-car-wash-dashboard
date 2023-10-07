import Charts from '@/src/components/charts/chart';
import Pchart from '@/src/components/charts/piechart';
import { useGetAnalyticsQuery } from '@/src/store/actions/report';
import { defaultProfile } from '@/src/utils/images';
import { Badge, Button, Card, DatePicker, Space, Typography } from 'antd';
import Image from 'next/image';
import React from 'react';

const Analtytics = () => {
  const { Text } = Typography;
  const { data, isLoading } = useGetAnalyticsQuery();
  const totalValue = data?.groupedByCategory?.reduce((total:number, exp:any) => total + exp.value, 0);
  const { RangePicker } = DatePicker;
  const COLORS = ['#59508D', '#F3A533', '#133F5C', '#BBD1C0', '#EB5F5E'];
  return (
    <div className="h-screen">
      <div className="flex gap-6 my-4 w-full">
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
          <Text className="font-semibold">Waiting on Queue</Text>
        </Card>
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
          <Text className="font-semibold">Waiting on Queue</Text>
        </Card>
      </div>
      <div className="flex  gap-6">
        <div className="flex flex-col gap-4 w-[70%]">
          <Card
            loading={isLoading}
            style={{ height: 300 }}
            size="small"
            className="bg-secondary"
          >
            {/* <div className="flex items-start gap-6 mb-3">
              <Button className="bg-primary text-white">Weekly</Button>
              <Button className="bg-secondary_dark">Monthly</Button>
            </div> */}
            <div className="flex flex-col gap-2">
              <Text className="font-bold text-xl mb-4">
                Weekly Performance Overview
              </Text>
              <Charts data={data?.weeklyPerformanceOverview} />
            </div>
          </Card>
          <Card
            loading={isLoading}
            style={{ height: 310 }}
            className="bg-secondary"
          >
            <div className="flex items-start gap-6 mb-3">
              <Button className="bg-primary text-white">
                Expenses Overview
              </Button>
              {/* <Button className="bg-secondary_dark">Income Overview</Button> */}
            </div>
            <div className="flex items-start gap-6 mb-1">
              <Button className="bg-primary text-white">Weekly</Button>
              <Space
                direction="vertical"
                size={12}
                className="bg-secondary border-none rounded-xl"
              >
                <RangePicker className="bg-inherit border-none" />
              </Space>
            </div>
            <div className="flex gap-10">
              <div className="w-full">
                {data?.groupedByCategory?.map((exp: any, index: number) => (
                  <div key={index} className="my-3 flex gap-4">
                    <div
                    // count={' '}
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      className={` p-1 h-5 w-5 rounded-full`}
                    >
                      {' '}
                    </div>
                    <div className="border-b-[0.1px] border-slate-300 w-full flex justify-between">
                      <Text>{exp.name}</Text>
                      <Text>{exp.value.toLocaleString()} Rwf</Text>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Card
                  loading={isLoading}
                  style={{ width: 180, height: 200 }}
                  className="bg-secondary border border-secondary_dark"
                  size="small"
                >
                  <Pchart data={data?.groupedByCategory} />
                  <Text>
                    Total : <span className="text-primary">{totalValue?.toLocaleString()} RWF</span>
                  </Text>
                </Card>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-[27%]">
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
          <Card
            size="small"
            title="Washer Stastics"
            className="overflow-y-scroll mt-4 bg-secondary"
            style={{ height: 320 }}
          >
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <Card
                  size="small"
                  key={index}
                  className="relative bg-inherit cursor-pointer border-r-0 border-l-0 border-t-0 !border-b-2 border-b-gray-300 my-3"
                >
                  <div className="flex gap-3 items-center">
                    <Image
                      className="rounded-full w-10 h-10"
                      src={defaultProfile}
                      alt="image"
                    />
                    <div>
                      <Text className="font-bold">Manzi Nasri</Text>
                      <br />
                    </div>
                  </div>
                  <Card size="small">
                    <div className="flex gap-4 justify-between">
                      <Text>No.Car Washed</Text>
                      <Text className="text-primary">125</Text>
                    </div>
                    <div className="flex gap-4 justify-between">
                      <Text>Avg. Reach Time</Text>
                      <Text className="text-primary">29 min</Text>
                    </div>
                    <div className="flex gap-4 justify-between">
                      <Text>Avg. Wash Time</Text>
                      <Text className="text-primary">7 min</Text>
                    </div>
                  </Card>
                </Card>
              ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analtytics;
