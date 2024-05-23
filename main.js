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
const employee = new Employee(1, "Bobur", "Sobir", 5000);
console.log(employee.getId()); // 1
console.log(employee.getFirstName());
console.log(employee.getLastName());
console.log(employee.getSalary());
console.log(employee.getFullName());
console.log(employee.getAnnualSalary());
employee.raiseSalary(10);
console.log(employee.getSalary());
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
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getFullName() {
    return `${this.name} ${this.address}`;
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
  static customKeys(obj) {
    return Object.keys(obj);
  }
  static customValues(obj) {
    return Object.values(obj);
  }
  static customEntries(obj) {
    return Object.entries(obj);
  }
}
const obj = { a: 1, b: 2, c: 3 };
console.log(CustomDate.customKeys(obj));
console.log(CustomDate.customValues(obj));
console.log(CustomDate.customEntries(obj));
*/
//////////*9*//////////
/*
class CustomArray {
  #array;
  constructor(arr) {
    if (Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
      throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
    }
    this.#array = arr;
  }
  static isNumberArray(arr) {
    return Array.isArray(arr) && arr.every((item) => typeof item === "number");
  }
  static sum(arr) {
    if (!CustomArray.isNumberArray(arr)) {
      throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
    }
    return arr.reduce((acc, val) => acc + val, 0);
  }
  static max(arr) {
    if (!CustomArray.isNumberArray(arr)) {
      throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
    }
    return Math.max(...arr);
  }
  static min(arr) {
    if (!CustomArray.isNumberArray(arr)) {
      throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
    }
    return Math.min(...arr);
  }
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, "three", 4, 5];
console.log(CustomArray.isNumberArray(arr1));
console.log(CustomArray.isNumberArray(arr2));
console.log(`Yig'indi: ${CustomArray.sum(arr1)}`);
console.log(`Max: ${CustomArray.max(arr1)}`);
console.log(`Min: ${CustomArray.min(arr1)}`);
try {
  console.log(CustomArray.sum(arr2));
} catch (error) {
  console.error(error.message);
}
*/
//////////*10*/////////
/*
class Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
    this.housePrice = housePrice;
    this.housesNumber = housesNumber;
    this.carPrice = carPrice;
    this.carsNumber = carsNumber;
    this.bankAccount = bankAccount;
  }

  getWealth() {
    let totalHouseValue = this.housePrice * this.housesNumber;
    let totalCarValue = this.carPrice * this.carsNumber;
    let totalWealth = totalHouseValue + totalCarValue + this.bankAccount;
    return totalWealth;
  }
}
class RichPerson extends Person {
  constructor(
    housePrice,
    housesNumber,
    carPrice,
    carsNumber,
    bankAccount,
    companyPrice,
    companiesNumber,
    investigation
  ) {
    super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
    this.companyPrice = companyPrice;
    this.companiesNumber = companiesNumber;
    this.investigation = investigation;
  }

  getWealth() {
    let baseWealth = super.getWealth();
    let totalCompanyValue = this.companyPrice * this.companiesNumber;
    let totalWealth = baseWealth + totalCompanyValue + this.investigation;
    return totalWealth;
  }
}
*/
