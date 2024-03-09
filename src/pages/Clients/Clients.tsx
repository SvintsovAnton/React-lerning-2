import { StyledNavLink } from "./styles";

function Clients() {
  return (
    <>
      <p>Наши партнеры: </p>
      <StyledNavLink
        style={() => ({
          textDecoration: "underline",
        })}
        to="/clients/lifferessen"
      >
        LifferEssen
      </StyledNavLink>
      <StyledNavLink
        style={() => ({
          textDecoration: "underline",
        })}
        to="/clients/technoplus"
      >
        TechnoPlus
      </StyledNavLink>

      <StyledNavLink
        style={() => ({
          textDecoration: "underline",
        })}
        to="/clients/workspacetudio"
      >
        WorkSpaceStudio
      </StyledNavLink>
    </>
  );
}

export default Clients;
