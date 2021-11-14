export const storageItem = (key: string, item: any) => {
  const valueString = JSON.stringify(item);
  localStorage.setItem(key, valueString);
};

export const getItem = (key: string) => {
  let item = localStorage.getItem(key);
  console.log(item);
  if (item) {
    item = JSON.parse(item);
  }

  return item;
};
