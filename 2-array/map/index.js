export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const results = collection.map(t => String.fromCharCode(t + 64).toLowerCase());

  return results;
}
