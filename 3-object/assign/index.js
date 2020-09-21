export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const object = {
    serialNumber: '12345',
    properties: {
      color: 'green',
      status: 'processed'
    }
  };
  const result = Object.assign(source, object);
  return result;
}
