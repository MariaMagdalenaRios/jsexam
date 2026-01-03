// Fråga 9. (4p)
// Skapa två ES6-klasser: Student och Course.
//
// Student:
//  - egenskaper: fullname, courses (array, startar tom)
//  - metoder:
//    registerCourse(course)   -> lägger till en kurs i listan
//    listCourses()            -> returnerar kurslistan
//
// Course:
//  - egenskaper: name, yhp (YH-poäng)
//  - metoder:
//    getCourseInfo()          -> t.ex. "JavaScript 20 yhp"

export class Student {
  constructor(fullname) {
    this.fullname = fullname;
    this.courses = [];
  }

  // Add a course object to the courses array
  registerCourse(course) {
    this.courses.push(course);
  }

  // Return the list of courses
  listCourses() {
    return this.courses;
  }
}

export class Course {
  constructor(name, yhp) {
    this.name = name;
    this.yhp = yhp;
  }

  // Return info as string: "JavaScript 20 yhp"
  getCourseInfo() {
    return `${this.name} ${this.yhp} yhp`;
  }
}