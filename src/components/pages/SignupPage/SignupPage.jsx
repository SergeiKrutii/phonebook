import { useEffect, useState } from "react";
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
import authSelectors from "components/redux/auth/authSelectors";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearError } from "components/redux/auth/authSlice";

const boxOptions = {
  display: "flex",
  alignItems: "flex-end",
};

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const globalTheme = useSelector(getCurrentTheme);
  const error = useSelector(authSelectors.getError);
  const dispathch = useDispatch();

  useEffect(() => {
    if (!error) return;
    toast.error(error);
    dispathch(clearError());
  }, [dispathch, error]);

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

  const onSubmit = async (e) => {
    e.preventDefault();

    dispathch(authOperations.signUp({ name, email, password }));
    reset();
  };

  const isEmptyInput = email === "" || password === "" || name === "";

  return (
    <>
      <ToastContainer autoClose={2500} />
      <StyledSignupPage>
        <span>We kindly ask you to fill in all input fields</span>
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
                label="Your name"
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
                label="Your email"
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
                label="Your password"
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
    </>
  );
};

export default SignupPage;
