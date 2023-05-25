import { useSelector } from "react-redux";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { StyledContainer } from "./StyledContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import Switch from "components/switch/Switch";

const Container = ({ children }) => {
  const globalTheme = useSelector(getCurrentTheme);
  return (
    <>
      <StyledContainer theme={globalTheme}>
        <Switch />
        {children}
        <p className="creator">
          Created by SK
          <a href="https://github.com/SergeiKrutii">
            <GitHubIcon
              sx={{ fill: globalTheme === "light" ? "" : "#ffffff" }}
            />
          </a>
        </p>
      </StyledContainer>
    </>
  );
};

export default Container;
