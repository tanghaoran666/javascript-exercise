// TODO 19: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, className) {
    super(name, age);
    this.klass = className;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
