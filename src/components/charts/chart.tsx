import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Charts = () => {
  const data = [
    {
      name: '0',
      sales: 4000,
      expenses: 2400,
      profit: 400,
    },
    {
      name: '1',
      sales: 4000,
      expenses: 2400,
      profit: 800,
    },
    {
      name: '2',
      sales: 3000,
      expenses: 1398,
      profit: 800,
    },
    {
      name: '3',
      sales: 2000,
      expenses: 6800,
      profit: 900,
    },
    {
      name: '4',
      sales: 2780,
      expenses: 3908,
      profit: 2800,
    },
    {
      name: '5',
      sales: 1890,
      expenses: 4800,
      profit: 800,
    },
    {
      name: '6',
      sales: 2390,
      expenses: 3800,
      profit: 1800,
    },
    {
      name: '7',
      sales: 3490,
      expenses: 4300,
      profit: 500,
    },
  ];
  return (
    <LineChart width={700} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Line type="monotone" dataKey="expenses" stroke="#E821BC" name="Expenses" />
      <Line type="monotone" dataKey="sales" stroke="#135C21" name="Sales" />
      <Line type="monotone" dataKey="profit" stroke="#AAE052" name="Profit" />
    </LineChart>
  );
};

export default Charts;
