import { useSelector } from "react-redux";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import imagePng from "phonebook png.png";
import { StyledHomePage, StytledImageContainer } from "./StyledHomePage";

const HomePage = () => {
  const globalTheme = useSelector(getCurrentTheme);
  return (
    <StyledHomePage theme={globalTheme}>
      <StytledImageContainer>
        <img src={imagePng} alt="phone book" />
        <p>PHONEBOOK</p>
      </StytledImageContainer>
      <p className="greetings">
        Hi there! Welcome to my first testing application Phone Book. Enjoy your
        experience! 🔥
      </p>
    </StyledHomePage>
  );
};

export default HomePage;
