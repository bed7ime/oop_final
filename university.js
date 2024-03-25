class University {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

class Department {
  constructor(name) {
    this.name = name;
  }
}

class Course {
  constructor(code, title) {
    this.code = code;
    this.title = title;
  }
}

class Person {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
}

class Professor extends Person {
  constructor(name, address, email, staffID) {
    super(name, address, email);
    this.staffID = staffID;
  }
}

class Student extends Person {
  constructor(name, address, email, studentID, year) {
    super(name, address, email);
    this.studentID = studentID;
    this.year = year;
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
};
main();
