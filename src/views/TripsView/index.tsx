import React from "react"

// Modules
import { useStaticQuery, graphql } from "gatsby"

// Components
import { StyledSectionInfo } from "./styles"
import { Box, Button } from "@material-ui/core"
import SectionTitle from "components/atoms/SectionTitle"
import Tile from "components/molecules/Tile"

const TripView: React.FC = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "trips" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSectionInfo>
      <Box textAlign="center">
        <SectionTitle subtitle="wybierz program, który Cię interesuje">
          Wycieczki
        </SectionTitle>
      </Box>
      <Box
        textAlign="center"
        display="flex"
        justifyContent="center"
        margin="20px"
        flexWrap="wrap"
      >
        <Tile
          text="Szkolne"
          altText="Wycieczki szkolne"
          image={data.allFile.edges[0].node.childImageSharp.fluid}
          link="/wycieczki"
        />
        <Tile
          text="Pracownicze"
          altText="Wycieczki pracownicze"
          image={data.allFile.edges[1].node.childImageSharp.fluid}
          link="/wycieczki"
        />
      </Box>
    </StyledSectionInfo>
  )
}

export default TripView
