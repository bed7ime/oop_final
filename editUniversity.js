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
    let departmentIn = "";
    this.departments.forEach((department, index) => {
      departmentIn += department.toString();
      if (index < this.departments.length - 1) {
        departmentIn += "\n\n\t";
      }
    });
    return `Departments in University :\n\t${departmentIn}`;
  }

  getStudents() {
    let studentIn = "";
    this.students.forEach((student, index) => {
      studentIn += student.toString();
      if (index < this.students.length - 1) {
        studentIn += "\n\n\t";
      }
    });
    return `Students in University :\n\t${studentIn}`;
  }

  getProfessors() {
    let professorIn = "";
    this.professors.forEach((professor, index) => {
      professorIn += professor.toString();
      if (index < this.professors.length - 1) {
        professorIn += "\n\n\t";
      }
    });
    return `Professors in University :\n\t${professorIn}`;
  }

  toString() {
    let departmentIn = "";
    this.departments.forEach((department, index) => {
      departmentIn += department.name;
      if (index < this.departments.length - 1) {
        departmentIn += ", ";
      }
    });
    let professorIn = "";
    this.professors.forEach((professor, index) => {
      professorIn += "Dr. " + professor.name;
      if (index < this.professors.length - 1) {
        professorIn += ", ";
      }
    });
    let studentIn = "";
    this.students.forEach((student, index) => {
      studentIn += student.name;
      if (index < this.students.length - 1) {
        studentIn += ", ";
      }
    });
    return `University : ${this.name},\n\tLocation : ${this.location},\n\tDepartment : ${departmentIn},\n\tStudents : ${studentIn},\n\tProfessors : ${professorIn}`;
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

  toString() {
    let professorIn = "";
    this.professors.forEach((professor, index) => {
      professorIn += "Dr. " + professor.name;
      if (index < this.professors.length - 1) {
        professorIn += ", ";
      }
    });
    let studentIn = "";
    this.students.forEach((student, index) => {
      studentIn += student.name;
      if (index < this.students.length - 1) {
        studentIn += ", ";
      }
    });
    return `Department : ${this.name},\n\tCourse : ${this.courses.length},\n\tStudents : ${studentIn},\n\tProfessors : ${professorIn}`;
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

  toString() {
    let studentincourse = "";
    this.students.forEach((student, index) => {
      studentincourse += student.name;
      if (index < this.students.length - 1) {
        studentincourse += ", ";
      }
    });
    return `Course : ${this.code} - ${this.title},\n\tProfessor : Dr. ${this.professor.name},\n\tStudents : ${studentincourse}`;
  }
}

class Person {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }

  toString() {
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

  toString() {
    let tcourse = "";
    this.courses.forEach((course, index) => {
      tcourse += course.title;
      if (index < this.courses.length - 1) {
        tcourse += ", ";
      }
    });
    return `Professor : Dr. ${this.name}, Staff ID : ${this.staffID},\n\tCourses : ${tcourse}`;
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

  toString() {
    let rcourse = "";
    this.courses.forEach((course, index) => {
      rcourse += course.title;
      if (index < this.courses.length - 1) {
        rcourse += ", ";
      }
    });
    return `Student : ${this.name}, Student ID : ${this.studentID}, Year : ${this.year}\n\tCourses : ${rcourse}`;
  }
}

const main = () => {
  //Creating University
  const myUniversity = new University(
    "Nakhon Pathom Rajabhat University",
    "85 Malaiman Road, Nakhon Pathom, Thailand"
  );

  //Creating Departments
  const department1 = new Department("Computer Science");
  const department2 = new Department("Software Engineering");

  //Adding Departments to University
  myUniversity.addDepartment(department1);
  myUniversity.addDepartment(department2);

  //Creating Students
  const student1 = new Student(
    "Alice",
    "123 Kanchanaburi",
    "alice@example.com",
    "S001",
    1
  );
  const student2 = new Student(
    "Bob",
    "456 Ratchaburi",
    "bob@example.com",
    "S002",
    2
  );

  //Adding Students to University
  myUniversity.addStudent(student1);
  myUniversity.addStudent(student2);

  //Adding Students to Department
  department1.addStudent(student1);
  department2.addStudent(student2);

  //Creating Professors
  const professor1 = new Professor(
    "Worachet Uttha",
    "789 Phetchakaseam road",
    "wuttha@example.com",
    "P001"
  );
  const professor2 = new Professor(
    "Udsanee Pakdeetrakulwong",
    "101 Wangtaku",
    "udsanee@example.com",
    "P002"
  );

  //Adding Professors to University
  myUniversity.addProfessor(professor1);
  myUniversity.addProfessor(professor2);

  //Adding Professor to department
  department1.addProfessor(professor1);
  department2.addProfessor(professor2);

  //Creating Courses
  const course1 = new Course("CS101", "Introduction to Programming");
  const course2 = new Course("SE101", "Introduction of Database Design");

  //Setting Professor to Course
  course1.setProfessor(professor1);
  course2.setProfessor(professor2);

  //Adding student to course
  course1.addStudent(student1);
  course2.addStudent(student2);

  //Registering Students to Courses
  student1.registerCourse(course1);
  student2.registerCourse(course2);

  //Teaching Courses by Professors
  professor1.teachCourse(course1);
  professor2.teachCourse(course2);

  //Add course to department
  department1.addCourse(course1);
  department2.addCourse(course2);

  //Printing Information
  console.log(myUniversity.toString());
  console.log("\n");
  console.log(department1.toString());
  console.log("\n");
  console.log(department2.toString());
  console.log("\n");
  console.log(course1.toString());
  console.log("\n");
  console.log(course2.toString());
  console.log("\n");
  console.log(student1.toString());
  console.log("\n");
  console.log(student2.toString());
  console.log("\n");
  console.log(professor1.toString());
  console.log("\n");
  console.log(professor2.toString());
  console.log("\n");
  console.log(myUniversity.getDepartments());
  console.log("\n");
  console.log(myUniversity.getProfessors());
  console.log("\n");
  console.log(myUniversity.getStudents());
};
main();
