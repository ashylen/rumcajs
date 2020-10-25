import React from "react"

import { Link, GatsbyLinkProps } from "gatsby"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import LogoWhite from "components/atoms/LogoWhite"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

import {
  Divider,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core"

import { IProps } from "./interface"
import { StyledDrawer, StyledList, StyledLogoLink } from "./styles"

const Sidebar: React.FC<IProps> = ({ mobileOpen, handleDrawerToggle }) => {
  const ArrowForwardIosIcon = () => (
    <ArrowForwardIos style={{ color: "#fff" }} />
  )

  const ListItemLink = ({ icon, primary, to, ...props }) => {
    const AdapterLink = React.forwardRef<HTMLAnchorElement, GatsbyLinkProps>(
      (props, ref) => (
        <Link activeClassName="active" innerRef={ref as any} {...props} />
      )
    )

    return (
      <li>
        <ListItem button to={to} component={AdapterLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText
            disableTypography
            primary={<Typography variant="body2">{primary}</Typography>}
          />
        </ListItem>
      </li>
    )
  }

  const drawer = (
    <>
      <StyledLogoLink activeClassName="active" to="/" alt="Strona główna">
        <LogoWhite />
      </StyledLogoLink>
      <StyledList>
        <ListItemLink
          onClick={handleDrawerToggle}
          to="/"
          icon={<ArrowForwardIosIcon />}
          primary="Strona główna"
        />
        <ListItemLink
          to="/kontakt/"
          icon={<ArrowForwardIosIcon />}
          primary="Kontakt"
        />
        <ListItemLink
          to="/wycieczki/"
          icon={<ArrowForwardIosIcon />}
          primary="Wycieczki"
        />
      </StyledList>
    </>
  )

  return (
    <Hidden smUp implementation="css">
      <StyledDrawer
        variant="temporary"
        anchor="left"
        color="primary"
        transitionDuration={0}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          onBackdropClick: handleDrawerToggle,
        }}
      >
        {drawer}
      </StyledDrawer>
    </Hidden>
  )
}
export default Sidebar
