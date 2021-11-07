export default function ajustItems<P>(
  items: Array<P>,
  row = 3,
  showColumns: number
): Array<Array<P>> {
  let currentColumn = 0;
  const newArray: Array<Array<P>> = [];
  items.forEach((covenant) => {
    if (newArray[currentColumn] === undefined) {
      newArray[currentColumn] = [];
    }
    newArray[currentColumn].push(covenant);
    if (
      currentColumn === showColumns - 1 &&
      newArray[currentColumn].length < row
    ) {
      currentColumn = 0;
      return;
    }
    if (
      currentColumn > showColumns - 1 &&
      newArray[currentColumn].length < row
    ) {
      return;
    }
    currentColumn++;
  });
  return newArray;
}
