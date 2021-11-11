export const storageItem = (key: string, item: string) => {
  const valueString = JSON.stringify(item);
  localStorage.setItem(key, valueString);
};

export const getItem = (key: string) => {
  const item = JSON.parse(localStorage.getItem(key) || '');
  console.log(item);

  return item;
};
