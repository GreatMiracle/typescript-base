abstract class Employee39 {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number; //abstract method
  //normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}
// const e = new Employee("kien", "Developer");// Error

class FullTimeEmployee extends Employee39 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName); //dùng super để kế thừa lại cha
  }
  // cần viết method này, vì nó được khai báo abstract ở trên
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee39 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let e1 = new FullTimeEmployee('My1', 'Name1', 12000);
let e2 = new Contractor('My2', 'Name2', 100, 160);
console.log(e1.compensationStatement());
console.log(e2.compensationStatement());
