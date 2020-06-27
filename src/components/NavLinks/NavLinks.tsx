import React from "react"

import HomeIcon from "@material-ui/icons/Home"
import { StyledLink } from "./styles"

const NavLinks: React.FC<{ scrolled?: boolean }> = ({ scrolled }) => {
  return (
    <>
      <StyledLink
        scrolled={scrolled}
        activeClassName="active"
        to="/"
        alt="Strona główna"
      >
        <HomeIcon />
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
