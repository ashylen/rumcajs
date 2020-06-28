import React, { useState } from "react"

import MenuIcon from "@material-ui/icons/Menu"
import { StyledLink, StyledLogoLink } from "./styles"
import Logo from "components/Logo"
import LogoWhite from "components/LogoWhite"
import Sidebar from "components/Sidebar/Sidebar"
import { Button } from "@material-ui/core"

const NavLinks: React.FC<{ isHome?: boolean }> = ({ isHome }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

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
      <Button
        style={{ color: "#fff", marginLeft: "auto" }}
        onClick={handleDrawerToggle}
        color="primary"
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </>
  )
}

export default NavLinks
