import { useGetAnalyticsQuery } from '@/src/store/actions/report';
import { FC } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
interface CProps{
  data:Array<object>
}
const Charts:FC<CProps> = ({ data }) => {
  return (
    <LineChart width={700} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="expenses"
        stroke="#E821BC"
        name="Expenses"
      />
      <Line type="monotone" dataKey="income" stroke="#135C21" name="Income" />
      <Line type="monotone" dataKey="profit" stroke="#AAE052" name="Profit" />
    </LineChart>
  );
};

export default Charts;
