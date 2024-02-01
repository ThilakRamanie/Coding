// class is a blueprint for creating predefined objects and methods

class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullname() {
    return `Your full name is ${this.firstname} ${this.lastname}`;
  }
  static enrollStudents(...students) {
    //return may be send an email here
  }
}

let firstStudent = new Student("Sample", "Remo");
firstStudent.fullname();
