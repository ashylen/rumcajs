import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      alt="Rumcajs Białe Logo"
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

export default Logo
