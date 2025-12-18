// Fråga 10. (3p)
// Använd ES6-moduler.
// 1) Importera klasserna Student och Course från question9.js.
// 2) Skapa två studenter och två olika kurser.
// 3) Registrera en kurs per student (registerCourse).
// 4) Logga studenternas kurser (listCourses()) och kursinfo (getCourseInfo()).

import { Student, Course} from "./question9.js";
const student2 = new Student("Maria");
const student3 = new Student ("Luisa");

// 2️⃣ Create courses
const jsCourse = new Course("JavaScript", 20);
const htmlCourse = new Course("HTML & CSS", 15);

// 3️⃣ Register a course per student
student2.registerCourse(jsCourse);
student3.registerCourse(htmlCourse);

// 4️⃣ Log student courses and course info
console.log(`${student2.fullname}'s courses:`, student2.listCourses().map(c => c.getCourseInfo()));
console.log(`${student3.fullname}'s courses:`, student3.listCourses().map(c => c.getCourseInfo()));