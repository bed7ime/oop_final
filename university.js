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
    // return this.departments;
    let departmentInUniversity = "";
    for (let i = 0; i < this.departments.length; i++) {
      departmentInUniversity += this.departments[i].tostring();
      if (i < this.departments.length - i) {
        departmentInUniversity += "\n\n\t";
      }
    }
    return `Department in University :\n\t${departmentInUniversity}`;
  }

  getStudents() {
    // return this.students;
    let studentInUniversity = "";
    for (let i = 0; i < this.students.length; i++) {
      studentInUniversity += this.students[i].tostring();
      if (i < this.students.length - 1) {
        studentInUniversity += "\n\n\t";
      }
    }
    return `Students in University :\n\t${studentInUniversity}`;
  }

  getProfessors() {
    // return this.professors;
    let professorInUniversity = "";
    for (let i = 0; i < this.professors.length; i++) {
      professorInUniversity += this.professors[i].tostring();
      if (i < this.professors.length - 1) {
        professorInUniversity += "\n\n\t";
      }
    }
    return `Professor in University :\n\t${professorInUniversity}`;
  }

  tostring() {
    let siu = "";
    let piu = "";
    let diu = "";
    for (let i = 0; i < this.students.length; i++) {
      siu += this.students[i].name;
      if (i < this.students.length - 1) {
        siu += ", ";
      }
    }
    for (let i = 0; i < this.professors.length; i++) {
      piu += this.professors[i].name;
      if (i < this.professors.length - 1) {
        piu += ", ";
      }
    }
    for (let i = 0; i < this.departments.length; i++) {
      diu += this.departments[i].name;
      if (i < this.departments.length - 1) {
        diu += ", ";
      }
    }
    return `University : ${this.name},\n\tLocation : ${this.location},\n\tDepartment : ${diu},\n\tStudents : ${siu},\n\tProfessors : ${piu}`;
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
    let siu = "";
    let piu = "";
    for (let i = 0; i < this.students.length; i++) {
      siu += this.students[i].name;
      if (i < this.students.length - 1) {
        siu += ", ";
      }
    }
    for (let i = 0; i < this.professors.length; i++) {
      piu += this.professors[i].name;
      if (i < this.professors.length - 1) {
        piu += ", ";
      }
    }
    return `Department : ${this.name},\n\tCourse : ${this.courses.length},\n\tStudents : ${siu},\n\tProfessors : ${piu}`;
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
    let siu = "";
    for (let i = 0; i < this.students.length; i++) {
      siu += this.students[i].name;
      if (i < this.students.length - 1) {
        siu += ", ";
      }
    }
    return `Course : ${this.code} - ${this.title},\n\tProfessor : ${this.professor.name},\n\tStudents : ${siu}`;
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
    let teachCourse = "";
    for (let i = 0; i < this.courses.length; i++) {
      teachCourse += this.courses[i].title;
      if (i < this.courses.length - 1) {
        teachCourse += ", ";
      }
    }
    return `Professor : Dr. ${this.name}, Staff ID : ${this.staffID},\n\tCourses : ${teachCourse}`;
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
    let registeredCourse = "";
    for (let i = 0; i < this.courses.length; i++) {
      registeredCourse += this.courses[i].title;
      if (i < this.courses.length - 1) {
        registeredCourse += ", ";
      }
    }
    return `Student : ${this.name}, Student ID : ${this.studentID}, Year : ${this.year}\n\tCourses : ${registeredCourse}`;
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
  const ve101 = new Course("VE101", "Introducing to Video Edit");
  const dr202 = new Course("SE101", "Introducing to Drawing");

  se.addCourse(se101);
  se.addCourse(cs101);
  se.addProfessor(worachet);
  se.addProfessor(udsanee);
  se.addStudent(tan);
  se.addStudent(punsan);
  
  mm.addCourse(se101);
  mm.addCourse(cs101);
  mm.addProfessor(worachet);
  mm.addProfessor(udsanee);
  mm.addStudent(tan);
  mm.addStudent(punsan);

  se101.addStudent(tan);
  se101.addStudent(punsan);

  //   se101.removeStudent(tan);

  se101.setProfessor(worachet);
  cs101.setProfessor(udsanee);

  npru.addDepartment(se);
  npru.addDepartment(mm);
  npru.addProfessor(worachet);
  npru.addProfessor(udsanee);
  npru.addStudent(tan);
  npru.addStudent(punsan);

  worachet.teachCourse(se101);
  worachet.teachCourse(cs101);

  tan.registerCourse(se101);
  tan.registerCourse(cs101);

  console.log(npru.tostring());
  console.log(se.tostring());
  console.log(mm.tostring());
  console.log(se101.tostring());
  console.log(cs101.tostring());
  console.log(worachet.tostring());
  console.log(udsanee.tostring());
  console.log(tan.tostring());
  console.log(punsan.tostring());
};
main();
