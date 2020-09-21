function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(s => s % 3 == 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = collection.filter(function(item, index, self) {
    return self.indexOf(item) == index;
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
