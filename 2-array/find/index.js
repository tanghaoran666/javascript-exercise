export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  // eslint-disable-next-line func-names
  const result = collection.filter(function(item) {
    return item.age === 18;
  });
  return result[0].name;
}
