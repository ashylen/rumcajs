import React from "react"

// Modules
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "rumcajs-strona-glownaa.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <BackgroundImage
          Tag="section"
          fluid={data.desktop.childImageSharp.fluid}
          className={className}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

BackgroundSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh);
  position: relative;
  display: flex;
`

export default StyledBackgroundSection
