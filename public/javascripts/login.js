/* eslint-disable */

import axios from "axios";
import { showAlert } from "./showAlert";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in to dashboard");
      window.setTimeout(() => {
        location.assign("/dashboard");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:3000/api/users/logout",
    });

    if (res.data.status === "success") location.reload(true);
  } catch (err) {
    showAlert("error", "Error logging out. Try again");
  }
};
