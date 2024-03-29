import React from "react"

// Modules
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

// Utils
import { phoneNumber, email } from "utils/constants"

const StyledFooter = styled.footer`
  background-color: #cf2b27;
  color: #fff;
  margin-top: auto;
`

// @TODO Make single component for logo
const StyledGatsbyLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 10px;
  text-decoration: none;
`

const StyledWrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const StyledCopy = styled.div`
  padding: 20px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  margin-top: 10px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(86, 86, 120, 0.1) 0,
      rgba(86, 86, 120, 0.6) 50%,
      rgba(86, 86, 120, 0.1) 100%
    );
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 5px;
`

const StyledItemHeading = styled.div`
  font-weight: 600;
`

const StyledItem = styled.div`
  padding: 10px 0;
`

const StyledPFR = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
`
const StyledPFRWrapper = styled.div`
  background-color: #fff;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: ${({ icon }) => (icon ? "10px" : "20px 0")};
  transition: color 0.3s, transform 0.3s, opacity 0.3s;
  will-change: color;
  font-size: ${({ icon }) => (icon ? "4rem" : "2rem")};
  word-break: break-word;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
    color: ${({ icon }) => (icon ? "#fff" : "inherit")};
    transform: translateY(-2px);
  }
`

const StyledEmail = styled.a`
  color: #fff;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
`

const StyledContactWrapper = styled.div`
  width: 100%;
`

const Footer = () => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 206, height: 68) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pfr_2: file(relativePath: { eq: "PFR_3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(images)
  return (
    <>
      <StyledPFRWrapper>
        <StyledPFR>
          <a
            href={images.pfr_2.childImageSharp.fluid.src}
            target="_blank"
            rel="noreferrer"
          >
            <Img fluid={images.pfr_2.childImageSharp.fluid} />
          </a>
        </StyledPFR>
      </StyledPFRWrapper>
      <StyledFooter>
        <StyledWrapper>
          <StyledGatsbyLink to="/" alt="Strona główna">
            <Img fixed={images.logo.childImageSharp.fixed} />
          </StyledGatsbyLink>
          <StyledContactWrapper>
            <StyledContent>
              <StyledItemHeading>Adres</StyledItemHeading>
              <StyledItem>Koralewskiego 7, 38-200 Jasło</StyledItem>
            </StyledContent>
            <StyledContent>
              <StyledItemHeading>Telefon</StyledItemHeading>
              <StyledLink href={`tel:${phoneNumber}`} alt="Zadzwoń">
                +48 {phoneNumber}
              </StyledLink>
            </StyledContent>
            <StyledContent>
              <StyledItemHeading>Email</StyledItemHeading>
              <StyledLink href={`mailto:${email}`} alt="Napisz e-mail">
                {email}
              </StyledLink>
            </StyledContent>
            <StyledContent>
              <div>
                {/* <StyledLink
                  icon
                  target="_blank"
                  linux
                  rel="noopener norefferer"
                  href="https://goo.gl/maps/ng5NhnWPJ3upiuef8"
                  alt="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </StyledLink> */}
                <StyledLink
                  icon
                  target="_blank"
                  rel="noopener norefferer"
                  alt="Facebook Rumcajs"
                  href="https://www.facebook.com/BTRumcajs"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </StyledLink>
              </div>
            </StyledContent>
          </StyledContactWrapper>

          <StyledCopy>
            <div>© Rumcajs</div>
            <br />
            <div>
              Wykonanie strony:{" "}
              <StyledEmail
                title="dominik.urban.mail@gmail.com"
                href="mailto:dominik.urban.mail@gmail.com"
                target="_blank"
                alt="Developer e-mail"
                rel="noopener noreferrer"
              >
                Dominik Urban
              </StyledEmail>
            </div>
            <br />
            <div>{new Date().getFullYear()}</div>
          </StyledCopy>
        </StyledWrapper>
      </StyledFooter>
    </>
  )
}

export default Footer
