import React from "react"

import styled from "styled-components"

// Components
import { StyledSectionInfo } from "./styles"
import { Typography, Box } from "@material-ui/core"
import { phoneNumber } from "../../utils/constants"

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: 20px;
  transition: color 0.3s, transform 0.3s, opacity 0.3s;
  will-change: color;
  font-size: 4rem;
  word-break: break-word;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  border-radius: 100px;
  display: inline-block;

  &:hover {
    opacity: 0.8;
    transform: translateY(-3px);
  }

  @media (min-width: 1024px) {
    pointer-events: none;
  }
`

const ContactView: React.FC = () => (
  <StyledSectionInfo>
    <Box textAlign="center">
      <Typography variant="h1" component="h2" color="primary">
        Kontakt
      </Typography>
      <br />
      <br />
      <Typography variant="h3">
        Wszelkie pytania prosimy kierować pod numer telefonu:
      </Typography>
      <br />
      <StyledLink href={`tel:${phoneNumber}`} alt="Zadzwoń">
        +48 {phoneNumber}
      </StyledLink>
    </Box>
  </StyledSectionInfo>
)

export default ContactView
