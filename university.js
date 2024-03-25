class University {
  departments = [];
  students = [];
  professors = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  addStudent(student) {
    this.students.push(student);
  }

  addProfessor(professor) {
    this.professors.push(professor);
  }

  removeDepartment(department) {
    let index = this.departments.indexOf(department);
    this.departments.splice(index, 1);
  }

  removeStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

  removeProfessor(professor) {
    let index = this.professors.indexOf(professor);
    this.professors.splice(index, 1);
  }

  getDepartments() {
    return this.departments;
  }

  getStudents() {
    return this.students;
  }

  getProfessors() {
    return this.professors;
  }

  tostring() {
    return `University : ${this.name},\n\tLocation : ${this.location},\n\tDepartment : ${this.departments},\n\tStudents : ${this.students},\n\tProfessors : ${this.professors}`;
  }
}

class Department {
  courses = [];
  students = [];
  professors = [];
  constructor(name) {
    this.name = name;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  removeCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  addStudent(student) {
    this.students.push(student);
  }

  addProfessor(professor) {
    this.professors.push(professor);
  }

  removeStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

  removeProfessor(professor) {
    let index = this.professors.indexOf(professor);
    this.professors.splice(index, 1);
  }

  getStudents() {
    return this.students;
  }

  getCourse() {
    return this.courses;
  }

  tostring() {
    return `Department : ${this.name},\n\tCourse : ${this.courses.length},\n\tStudents : ${this.students},\n\tProfessors : ${this.professors}`;
  }
}

class Course {
  students = [];
  professor = null;
  constructor(code, title) {
    this.code = code;
    this.title = title;
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

  setProfessor(professor) {
    this.professor = professor;
  }

  getProfessor() {
    return this.professor;
  }

  getStudents() {
    return this.students;
  }

  tostring() {
    return `Course : ${this.code} - ${this.title},\n\tProfessor : ${this.professor},\n\tStudents : ${this.students}`;
  }
}

class Person {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }

  tostring() {
    return `Person : ${this.name}, ${this.address}, ${this.email}`;
  }
}

class Professor extends Person {
  courses = [];
  constructor(name, address, email, staffID) {
    super(name, address, email);
    this.staffID = staffID;
  }

  teachCourse(course) {
    this.courses.push(course);
  }

  stopTeachingCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  getCourse() {
    return this.courses;
  }

  tostring() {
    return `Professor : Dr. ${this.name}, Staff ID : ${this.staffID},\n\tCourses : ${this.courses}`;
  }
}

class Student extends Person {
  courses = [];
  constructor(name, address, email, studentID, year) {
    super(name, address, email);
    this.studentID = studentID;
    this.year = year;
  }

  registerCourse(course) {
    this.courses.push(course);
  }

  dropCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  getCourse() {
    return this.courses;
  }

  tostring() {
    return `Student : ${this.name}, Student ID : ${this.studentID}, Year : ${this.year}\n\tCourses : ${this.courses}`;
  }
}

const main = () => {
  // Students
  const tan = new Student(
    "Kittipat",
    "ThapLuang",
    "654259023@webmail.npru.ac.th",
    "654259023",
    2
  );
  const punsan = new Student(
    "Punsan",
    "BangPhae",
    "654259026@webmail.npru.ac.th",
    "654259026",
    2
  );

  //   Professor
  const worachet = new Professor(
    "Worachet",
    "IDK",
    "worachet@webmail.npru.ac.th",
    "P01"
  );
  const udsanee = new Professor(
    "Udsanee",
    "SomeWhereinThailand",
    "udsanee@webmail.npru.ac.th",
    "P02"
  );

  //   University
  const npru = new University(
    "Nakhon Pathom Rajabhat University",
    "Nakhon Pathom"
  );

  //   Department
  const se = new Department("Software Engineering");
  const mm = new Department("MultiMedia");

  //   Course
  const cs101 = new Course("CS101", "Introducing to Programming");
  const se101 = new Course("SE101", "Introducing to Database");

  se101.addStudent(tan);
  se101.addStudent(punsan);

  se101.removeStudent(tan);

  se101.setProfessor(worachet);
  cs101.setProfessor(udsanee);

  npru.addDepartment(se);
  npru.addDepartment(mm);
  npru.addProfessor(worachet);
  npru.addProfessor(udsanee);
  npru.addStudent(tan);
  npru.addStudent(punsan);

  console.log(se101.getStudents());
};
main();
