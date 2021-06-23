import { ChangeEvent, memo, useMemo } from 'react';
import clsx from 'clsx';

interface SelectorProps {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: number;
  count?: number;
  className?: string;
}

const Selector = ({ className, onChange, value, count = 0 }: SelectorProps) => {
  const options = useMemo(() => Array.from({ length: count }, (_, k) => k + 1), [count]);

  return (
    <select
      onChange={onChange}
      value={value}
      className={clsx('px-6 py-2 rounded border cursor-pointer', className)}
    >
      {options.map((v: number) => (
        <option key={v} value={v} className="bg-white text-black">
          {v}
        </option>
      ))}
    </select>
  );
};

Selector.defaultProps = {
  onChange: () => undefined,
  value: undefined,
  count: 0,
  className: '',
};

export default memo(Selector);
