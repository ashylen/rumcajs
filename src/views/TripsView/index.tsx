import React from "react"

// Modules
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import { StyledSectionInfo } from "./styles"
import { Box } from "@material-ui/core"
import SectionTitle from "components/atoms/SectionTitle"

const SchoolImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      alt="Wycieczki szkolne"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

const TripView: React.FC = () => (
  <StyledSectionInfo>
    <Box textAlign="center">
      <SectionTitle subtitle="wybierz program, który Cię interesuje">
        Wycieczki
      </SectionTitle>
    </Box>
    <Box textAlign="center" display="flex" justifyContent="space-around">
      <Box maxWidth="300px" width="100%">
        <SchoolImage />
        <button>Szkolne</button>
      </Box>
      <Box maxWidth="300px" width="100%">
        <SchoolImage />
        <button>Pracownicze</button>
      </Box>
    </Box>
  </StyledSectionInfo>
)

export default TripView
