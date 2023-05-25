import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "components/redux/auth/authOperations";
import { StyledSignupPage } from "./StyledSignupPage";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";

const boxOptions = {
  display: "flex",
  alignItems: "flex-end",
};

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const globalTheme = useSelector(getCurrentTheme);
  const dispathch = useDispatch();

  const textInputOptions = {
    variant: "standard",
    inputProps: {
      maxLength: "25",
      minLength: "3",
      style: {
        color: globalTheme === "light" ? "#020202" : "#ffffff",
      },
    },
    sx: {
      mr: 1,
      my: 0.5,
    },
  };

  const buttonOptions = {
    variant: "contained",
    endIcon: <AppRegistrationIcon />,
    size: "small",
    sx: {
      "&.Mui-disabled": {
        backgroundColor: globalTheme === "light" ? "" : "#cccccc",
        color: globalTheme === "light" ? "" : "#ffffff",
      },
    },
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const reset = (e) => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispathch(authOperations.signUp({ name, email, password }));

    reset();
  };

  const isEmptyInput = email === "" || password === "" || name === "";

  return (
    <StyledSignupPage>
      <span>We kindly ask you to fill in all input fields...</span>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <Box
            sx={{
              ...boxOptions,
            }}
          >
            <AccountCircle sx={textInputOptions.sx} />
            <TextField
              name="name"
              type="text"
              value={name}
              label="Type your name"
              {...textInputOptions}
              onChange={onInputChange}
            />
          </Box>
          <Box sx={{ ...boxOptions }}>
            <AlternateEmailIcon sx={textInputOptions.sx} />
            <TextField
              name="email"
              type="email"
              value={email}
              label="Type your email"
              {...textInputOptions}
              onChange={onInputChange}
            />
          </Box>
          <Box sx={{ ...boxOptions }}>
            <KeyIcon sx={textInputOptions.sx} />
            <TextField
              name="password"
              value={password}
              type="password"
              label="Type your password"
              {...textInputOptions}
              onChange={onInputChange}
            />
          </Box>
          <Button
            {...buttonOptions}
            disabled={!!isEmptyInput}
            onClick={onSubmit}
          >
            Sign up
          </Button>
        </FormControl>
      </Box>
    </StyledSignupPage>
  );
};

export default SignupPage;
