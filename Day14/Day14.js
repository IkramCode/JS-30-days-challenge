class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`The updated age is ${this.age}.`);
  }

  static genericGreet() {
    return "Hello, I am a generic greeting!";
  }
}

class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
    console.log(`Total number of students: ${Student.studentCount}`);
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  id() {
    console.log(`The Student ID is ${this.studentId}`);
  }
}

const student = new Student("Muhammad Ikram Ul Haq", 18, 32215215);

console.log(student.greet());

student.id();

student.updateAge(19);

console.log(Person.genericGreet());
