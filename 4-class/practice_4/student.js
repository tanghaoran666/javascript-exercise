// TODO 16: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, className) {
    super(name, age);
    this.klass = className;
  }

  introduce() {
    return super.basic_introduce(
      `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`
    );
  }
}
