/* eslint-disable class-methods-use-this */
// TODO 15: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // eslint-disable-next-line camelcase
  basic_introduce(message) {
    return message;
  }

  introduce() {
    return this.basic_introduce(`My name is ${this.name}. I am ${this.age} years old.`);
  }
}
