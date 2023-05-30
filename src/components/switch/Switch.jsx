import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./styledSwitch";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { createTheme } from "@mui/material";
import { setLightTheme, setDarkTheme } from "components/redux/theme/themeSlice";

export default function Switch() {
  const globalTheme = useSelector(getCurrentTheme);
  console.log("🚀 ~ globalTheme:", globalTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (globalTheme === "light") {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  };

  const theme = createTheme({
    palette: {
      mode: globalTheme,
    },
  });

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            theme={theme}
            onChange={toggleTheme}
            sx={{ m: 1, position: "absolute" }}
            defaultChecked
          />
        }
      />
    </FormGroup>
  );
}
