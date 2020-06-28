import React from "react"

import HomeIcon from "@material-ui/icons/Home"
import { StyledLink, StyledLogoLink } from "./styles"
import Logo from "components/Logo"

const NavLinks: React.FC<{ scrolled?: boolean }> = ({ scrolled }) => {
  return (
    <>
      <StyledLogoLink
        scrolled={scrolled}
        activeClassName="active"
        to="/"
        alt="Strona główna"
      >
        <Logo />
      </StyledLogoLink>
      <StyledLink
        scrolled={scrolled}
        activeClassName="active"
        to="/"
        alt="Strona główna"
      >
        Strona główna
      </StyledLink>
      <StyledLink
        scrolled={scrolled}
        activeClassName="active"
        to="/kontakt/"
        alt="Kontakt"
      >
        Kontakt
      </StyledLink>
      <StyledLink
        scrolled={scrolled}
        activeClassName="active"
        to="/polityka-prywatnosci/"
        alt="Oferta"
      >
        Wycieczki
      </StyledLink>
      <StyledLink
        scrolled={scrolled}
        activeClassName="active"
        to="/regulamin-serwisu/"
        alt="Cennik"
      >
        Cennik
      </StyledLink>
    </>
  )
}

export default NavLinks
