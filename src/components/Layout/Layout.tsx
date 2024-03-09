import { LayoutProps } from "./types";
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  NavContainerFooter,
  StyledNavLinkFooter,
} from "./styles";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer>
          <StyledNavLink to="/">
            <HeaderLogo />
          </StyledNavLink>
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavContainerFooter>
          <StyledNavLinkFooter
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLinkFooter>
          <StyledNavLinkFooter
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLinkFooter>
          <StyledNavLinkFooter
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </StyledNavLinkFooter>
          <StyledNavLinkFooter
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </StyledNavLinkFooter>
        </NavContainerFooter>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
