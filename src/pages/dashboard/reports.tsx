import {
  useGetAnalyticsQuery,
  useGetExpensesQuery,
  useGetIncomeQuery,
} from '@/src/store/actions/report';
import { defaultProfile } from '@/src/utils/images';
import { LineOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  Dropdown,
  Image,
  MenuProps,
  Modal,
  Space,
  Typography,
} from 'antd';
import { FC, useState } from 'react';
import { formatDate } from '../../utils/formatdate';
import ReportForm from '@/src/components/reports/reportForm';
import { useGetAllUsersQuery } from '@/src/store/actions/auth';

const Reports: FC = () => {
  const { RangePicker } = DatePicker;
  const { Text } = Typography;
  const [isOpen, setIsOpen] = useState(false);
  const [reportType, setReportType] = useState('Expense');
  const { data: expenseData } = useGetExpensesQuery();
  const { data: incomeData, isLoading: incomeLoading } = useGetIncomeQuery();
  const { data: totalCost, isLoading: tloading } = useGetAnalyticsQuery();
  const { data: userData, isLoading: uloading } = useGetAllUsersQuery();
  const handleCancel = () => {
    setIsOpen(false);
  };
  let data: { reports: any };
  if (reportType === 'Expense') data = expenseData || { reports: [] };
  else if (reportType === 'Income') data = incomeData || { reports: [] };
  else data = { reports: [] };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Text
          onClick={() => {
            setReportType('Income');
            setIsOpen(true);
          }}
          className="text-center text-lg"
        >
          Income
        </Text>
      ),
    },
    {
      key: '2',
      label: (
        <Text
          onClick={() => {
            setReportType('Expense');
            setIsOpen(true);
          }}
          className="text-center text-lg"
        >
          Expense
        </Text>
      ),
    },
  ];
  return (
    <div className="font-poppins flex justify-around h-screen">
      <div className="flex flex-col gap-4 w-[70%]">
        <Card className="bg-secondary" loading={incomeLoading}>
          <div className="flex gap-5 my-3">
            <Button
              onClick={() => setReportType('Expense')}
              className={`${
                reportType === 'Expense'
                  ? 'bg-primary text-white'
                  : 'bg-secondary border-none shadow'
              }`}
            >
              Expenses
            </Button>
            <Button
              onClick={() => setReportType('Income')}
              className={`${
                reportType === 'Income'
                  ? 'bg-primary text-white'
                  : 'bg-secondary border-none shadow'
              }`}
            >
              Incomes
            </Button>
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
            {!(data?.reports.length > 0) && (
              <p className="flex justify-center my-24 font-bold text-lg">
                No {reportType} Yet
              </p>
            )}
            {data?.reports.map((report: any, i: number) => (
              <div key={i} className="flex items-start py-2 border-b-2">
                <div className="w-28">
                  <Text className="text font-semibold">
                    {i + 1}. {report.name}
                  </Text>
                </div>
                <div className="flex gap-4">
                  {reportType === 'Expense' && (
                    <>
                      <Text>
                        Quantity :{' '}
                        <span className="text-primary">{report.quantity}</span>
                      </Text>
                      <Text>
                        Unit Price :{' '}
                        <span className="text-primary">{report.price}</span>
                      </Text>
                    </>
                  )}
                  <Text>
                    Total :{' '}
                    <span className="text-primary">
                      {reportType === 'Expense'
                        ? report.price * report.quantity
                        : report.amount}
                    </span>
                  </Text>
                </div>
                <Text className="font-bold mx-10">
                  {formatDate(report.report_date)}
                </Text>
                {report.attachments &&
                  report.attachments.map((img: string, i: number) => (
                    <Image
                      key={i}
                      width={50}
                      height={20}
                      src={img}
                      alt="image"
                      className="object-cover"
                    />
                  ))}
              </div>
            ))}
          </div>
        </Card>
        <Card className="bg-secondary" loading={uloading}>
          <Text className="font-bold text-lg">Staffs</Text>
          <div className="h-64 overflow-y-scroll relative">
            {userData?.data?.map((user, i) => (
              <div key={i} className="flex items-start py-2 border-b-2">
                <div>
                  <Text className="font-semibold text-2xl">{i + 1}.</Text>
                  <Avatar
                    className="mx-4"
                    size={50}
                    // icon={<Image src={defaultProfile} alt="image" />}
                  />
                </div>
                <div className="flex flex-col">
                  <Text className="text-lg font-semibold">
                    {user?.firstname + ' ' + user?.lastname}
                  </Text>
                  <Text>Lastly edited at {formatDate(user?.updatedAt)}</Text>
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
      <div className="flex flex-col gap-20">
        <div>
          <Dropdown menu={{ items }} placement="bottom">
            <Button className="h-12 w-full border-none my-4 bg-primary text-white font-semibold text-lg">
              Make a Report
            </Button>
          </Dropdown>
          <Modal open={isOpen} onCancel={handleCancel} footer={[]}>
            <Text className="text-xl font-semibold">{reportType} Report</Text>
            <ReportForm handleCancel={handleCancel} reportType={reportType} />
          </Modal>
          <Card
            loading={tloading}
            style={{ width: 300 }}
            className="bg-secondary"
          >
            <Text className="font-semibold">Total Costs</Text>
            {totalCost?.weeklyExpenses.map((expense: number, i: number) => (
              <div key={i} className="flex gap-6 justify-between">
                <Text>Week {4 - i}</Text>
                <LineOutlined className="text-primary" />
                <Text>{expense} RWF</Text>
              </div>
            ))}
          </Card>
        </div>
        <div>
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
