import React from "react"

import HomeIcon from "@material-ui/icons/Home"
import { StyledLink, StyledLogoLink } from "./styles"
import Logo from "components/Logo"
import LogoWhite from "components/LogoWhite"

const NavLinks: React.FC<{ isHome?: boolean }> = ({ isHome }) => {
  return (
    <>
      <StyledLogoLink activeClassName="active" to="/" alt="Strona główna">
        {isHome ? <Logo /> : <LogoWhite />}
      </StyledLogoLink>
      <StyledLink
        isHome={isHome}
        activeClassName="active"
        to="/"
        alt="Strona główna"
      >
        Strona główna
      </StyledLink>
      <StyledLink
        isHome={isHome}
        activeClassName="active"
        to="/kontakt/"
        alt="Kontakt"
      >
        Kontakt
      </StyledLink>
      <StyledLink
        isHome={isHome}
        activeClassName="active"
        to="/wycieczki/"
        alt="Oferta"
      >
        Wycieczki
      </StyledLink>
    </>
  )
}

export default NavLinks
