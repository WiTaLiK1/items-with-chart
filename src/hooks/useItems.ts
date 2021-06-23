import { useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getRandomIntInclusive, reorder } from '../utils';

// types
import { Item } from '../types/Item';

const generateRandomItems = (count: number) =>
  Array.from({ length: count }, () => ({
    value: getRandomIntInclusive(1, 100),
    id: String(uuidv4()),
  }));

interface DispatchUseItems {
  countItems: number;
  generateRandom: (count?: number) => void;
  reorderItems: (fromIndex: number, toIndex: number) => void;
}

const useItems = (initialCountItems = 10): [Item[], DispatchUseItems] => {
  const [items, setItems] = useState<Item[]>(generateRandomItems(initialCountItems));

  const countItems = useMemo(() => items.length, [items]);

  const generateRandom = useCallback(
    (count = countItems) => {
      setItems(generateRandomItems(count));
    },
    [setItems, countItems]
  );

  const reorderItems = useCallback(
    (startIndex, endIndex) => {
      setItems((oldItems: Item[]) => reorder(oldItems, startIndex, endIndex));
    },
    [setItems]
  );

  return [items, { countItems, generateRandom, reorderItems }];
};

export default useItems;
