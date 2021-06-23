export function reorder(list: any[], fromIndex: number, toIndex: number): any[] {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);

  return result;
}

export function getRandomIntInclusive(min: number, max: number): number {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export function minMax(value: number, { min = 1, max = 10 }): number {
  return value ? Math.max(Math.min(value, max), min) : min;
}
