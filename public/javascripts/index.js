import "@babel/polyfill";
import "marked";
import { login } from "./login";
import { addALesson } from "./newLesson";

// CHECK IF DOM ELEMENTS EXIST
const loginForm = document.querySelector(".form");

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

const lessonForm = document.querySelector(".lessonForm");

if (lessonForm)
  lessonForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const student = document.getElementById("studentId").value;
    const teacher = document.getElementById("teacherId").value;
    const given = document.getElementById("given").value;
    const report = document.getElementById("report").value;
    const dateOfLesson = document.getElementById("date").value;
    const type = document.getElementById("typeOfLesson").value;
    addALesson(student, teacher, given, report, dateOfLesson, type);
  });
