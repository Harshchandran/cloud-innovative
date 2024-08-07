import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export const LogIn = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    let localErrors = { ...errors };

    if (name === "email") {
      let emailRegex = new RegExp("[a-z0-9._%+\\-]+@[a-z0-9.-]+\\.[a-z]{2,}$");
      localErrors.email = emailRegex.test(value)
        ? ""
        : "Please enter a valid email address.";
    }

    if (name === "password") {
      if (value.length < 4 || value.length > 60) {
        localErrors.password =
          "Your password must contain between 4 and 60 characters.";
      } else {
        localErrors.password = "";
      }
    }

    setErrors(localErrors);

    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.email && !errors.password) {
      console.log("Form submitted");
    } else {
      console.log("Fix errors before submitting.");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-box">
          <div>LogIn</div>
          <form onSubmit={handleSubmit} className="login-form">
            <FormControl error={!!errors.email} sx={{ width: "20rem" }}>
              <TextField
                required
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={userInput.email}
                onChange={handleChange}
              />
              <FormHelperText>{errors.email}</FormHelperText>
            </FormControl>

            <FormControl
              error={!!errors.password}
              sx={{ width: "20rem", marginTop: "1rem" }}
            >
              <TextField
                required
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={userInput.password}
                onChange={handleChange}
              />
              <FormHelperText>{errors.password}</FormHelperText>
            </FormControl>

            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
