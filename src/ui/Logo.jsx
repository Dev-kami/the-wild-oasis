import styled from "styled-components";
import logoLight from "../Images/logo-light.png";
import logoDark from "../Images/logo-dark.png";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? logoDark : logoLight;

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
