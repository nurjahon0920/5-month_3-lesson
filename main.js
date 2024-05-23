//////////*1*//////////
/*
class Triangle {
  #leftSide;
  #rightSide;
  #width;
  getLeftSide() {
    return this.#leftSide;
  }
  getRightSide() {
    return this.#rightSide;
  }
  getWidth() {
    return this.#width;
  }
  setSides(a, b, c) {
    this.#leftSide = a;
    this.#rightSide = b;
    this.#width = c;
  }
}
const tr1 = new Triangle();
tr1.setSides(3, 4, 5);
console.log(tr1.getLeftSide());
console.log(tr1.getRightSide());
console.log(tr1.getWidth());
*/
//////////*2*//////////
/*
class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(id, firstName, lastName, salary) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
  }

  getId() {
    return this.#id;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getSalary() {
    return this.#salary;
  }

  setId(id) {
    this.#id = id;
  }

  setFirstName(fName) {
    this.#firstName = fName;
  }

  setLastName(lName) {
    this.#lastName = lName;
  }

  setSalary(s) {
    this.#salary = s;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getAnnualSalary() {
    return this.#salary * 12;
  }

  raiseSalary(percent) {
    this.#salary += this.#salary * (percent / 100);
  }
}
*/
//////////*3*//////////
/*
class CustomDate {
  #day;
  #month;
  #year;
  constructor(day, month, year) {
    this.#day = day;
    this.#month = month;
    this.#year = year;
  }
  getDay() {
    return this.#day;
  }
  getMonth() {
    return this.#month;
  }
  getYear() {
    return this.#year;
  }
  getISOdate() {
    return `${this.#day}-${this.#month}-${this.#year}`;
  }
}
const tr1 = new Triangle();
tr1.setSides(3, 4, 5);
console.log(tr1.getLeftSide());
console.log(tr1.getRightSide());
console.log(tr1.getWidth());
*/
//////////*4*//////////
/*
class Time {
  #hour;
  #minute;
  #second;
  constructor(hour, minute, second) {
    this.#hour = hour;
    this.#minute = minute;
    this.#second = second;
  }
  getHour() {
    return this.#hour;
  }
  getMinute() {
    return this.#minute;
  }
  getSecond() {
    return this.#second;
  }
  setHour() {
    this.#hour = hour;
  }
  setMinute() {
    this.#minute = minute;
  }
  setSecond() {
    this.#second = second;
  }
  nextSecond() {
    this.#second++;
    if (this.#second == 60) {
      this.#second = 0;
      this.#minute++;
      if (this.#minute == 60) {
        this.#minute = 0;
        this.#hour++;
        if (this.#hour == 24) {
          this.#hour = 0;
        }
      }
    }
  }
  previousSecond() {
    this.#second--;
    if (this.#second == -1) {
      this.#second = 59;
      this.#minute--;
      if (this.#minute == -1) {
        this.#minute = 59;
        this.#hour--;
        if (this.#hour == -1) {
          this.#hour = 23;
        }
      }
    }
  }
}
*/
//////////*5*//////////
//////////*6*//////////
/*
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, university) {
    super(firstName, lastName);
    this.university = university;
  }
  getInfo() {
    return super.getFullName() + ` ${this.university}da o'qiydi`;
  }
}

const john = new Student("John", "Doe", "TATU");
console.log(john.getInfo());

class EmployeeStudent extends Student {
  constructor(firstName, lastName, university, workPlace) {
    super(firstName, lastName, university);
    this.workPlace = workPlace;
  }
  getInfo() {
    return super.getInfo() + ` va ${this.workPlace}da ishlaydi!`;
  }
}

let es = new EmployeeStudent("Xurshid", "Shodiyev", "TATU", "NAJOT TA'LIM");

console.log(es);

console.log(es.getInfo());
*/
//////////*7*//////////

//////////8*//////////

//////////*9*//////////
class CustomArray {
  constructor() {
    this.arr = [];
  }
  isNumberArray() {}
}
//////////*10*/////////
