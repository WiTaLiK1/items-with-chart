import { memo } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export interface ChartProps {
  data?: Array<{ value: number }>;
  className?: string;
}

const Chart = ({ data, className }: ChartProps) => (
  <ResponsiveContainer width="100%" height={400} className={className}>
    <LineChart data={data}>
      <XAxis dataKey="index" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
    </LineChart>
  </ResponsiveContainer>
);

Chart.defaultProps = {
  data: [],
  className: '',
};

export default memo(Chart);
