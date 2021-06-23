import { ChangeEvent, memo, useCallback } from 'react';

// components
import Chart from './components/Chart';
import Selector from './components/Selector';
import ItemList from './components/ItemList';
// hooks
import useItems from './hooks/useItems';
// utils
import { minMax } from './utils';

const App = () => {
  const [items, { countItems, generateRandom, reorderItems }] = useItems(1);

  const handleChangeNumberOfValues = useCallback(
    ({ target: { value } }: ChangeEvent<any>) => {
      const minMaxValue = minMax(parseInt(value, 10), { min: 1, max: 10 });

      generateRandom(minMaxValue);
    },
    [generateRandom]
  );

  const randomize = useCallback(() => {
    generateRandom();
  }, [generateRandom]);

  return (
    <div className="min-h-screen flex justify-center items-center p-8 bg-gray-200">
      <div className="container mx-auto flex justify-center">
        <div className="shadow-xl flex justify-center flex-col lg:w-1/2 rounded-lg p-8 bg-white">
          <Chart data={items} className="self-center" />

          <div className="flex justify-center items-center p-6 ">
            <p>Number of Values:</p>
            <Selector
              className="mx-3"
              onChange={handleChangeNumberOfValues}
              value={countItems}
              count={10}
            />
          </div>

          <ItemList changeOrder={reorderItems} items={items} />

          <button
            type="button"
            className="flex justify-center bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition duration-200 each-in-out"
            onClick={randomize}
          >
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(App);
