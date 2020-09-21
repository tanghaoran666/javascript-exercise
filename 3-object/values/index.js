export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const list = Object.values(source);
  let result = 0;
  list.forEach(t => (result += Number(t)));
  return result;
}
