export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let result = 0;
  collection.forEach(element => {
    if (element.indexOf('粤') !== -1) {
      result++;
    }
  });
  return result;
}
