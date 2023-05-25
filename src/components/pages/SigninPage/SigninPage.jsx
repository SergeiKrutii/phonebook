import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "components/redux/auth/authOperations";
import { StyledSigninPage } from "./StyledSigninPage";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { useSelector } from "react-redux";

const boxOptions = {
  display: "flex",
  alignItems: "flex-end",
};

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispathch = useDispatch();
  const globalTheme = useSelector(getCurrentTheme);

  const textInputOptions = {
    variant: "standard",
    inputProps: {
      maxLength: "25",
      minLength: "3",
      style: { color: globalTheme === "light" ? "#020202" : "#ffffff" },
    },
    sx: {
      mr: 1,
      my: 0.5,
    },
  };
  const buttonOptions = {
    variant: "contained",
    endIcon: <HowToRegOutlinedIcon />,
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
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispathch(authOperations.signIn({ email, password }));

    reset();
  };

  const isEmptyInput = email === "" || password === "";

  return (
    <StyledSigninPage>
      <span>Please, enter your credentials...</span>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <Box
            sx={{
              ...boxOptions,
            }}
          >
            <AlternateEmailIcon sx={textInputOptions.sx} />
            <TextField
              name="email"
              id="email"
              value={email}
              type="email"
              label="Type your email"
              {...textInputOptions}
              onChange={onInputChange}
            />
          </Box>
          <Box sx={{ ...boxOptions }}>
            <KeyIcon sx={textInputOptions.sx} />
            <TextField
              name="password"
              id="password"
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
            Sign in
          </Button>
        </FormControl>
      </Box>
    </StyledSigninPage>
  );
};

export default SigninPage;
