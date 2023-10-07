import { FC } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

type Props = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};
interface PieProps {
  data: Array<object>;
}
const Pchart: FC<PieProps> = ({ data }) => {
  const COLORS = ['#59508D', '#F3A533', '#133F5C', '#BBD1C0','#BC5F5E', '#EB5F5E'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: Props) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={data}
        cx={75}
        cy={75}
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
      >
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Pchart;
