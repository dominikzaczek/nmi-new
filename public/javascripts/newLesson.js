import axios from "axios";
import { showAlert } from "./showAlert";

export const addALesson = async (
  student,
  teacher,
  given,
  report,
  dateOfLesson,
  type
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/lessons",
      data: {
        student,
        teacher,
        report,
        dateOfLesson,
        type,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Lesson added");
    }
  } catch (err) {
    showAlert("error", err.response.data);
  }
};
