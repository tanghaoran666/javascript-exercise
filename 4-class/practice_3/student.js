// TODO 13: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, className) {
    super(name, age);
    this.klass = className;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}.`;
  }
}
