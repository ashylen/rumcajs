import React from "react"

// Modules
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import { StyledSectionInfo } from "./styles"
import { Box, Button } from "@material-ui/core"
import SectionTitle from "components/atoms/SectionTitle"

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
              fluid {
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
        justifyContent="space-around"
        margin="20px"
      >
        <Box maxWidth="300px" width="100%" position="relative">
          <Box>
            <Img
              alt="Wycieczki szkolne"
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </Box>
          <Box
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Button color="primary">Szkolne</Button>
          </Box>
        </Box>
        <Box maxWidth="300px" width="100%" position="relative">
          <Img
            alt="Wycieczki szkolne"
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Button color="secondary">Pracownicze</Button>
          </Box>
        </Box>
      </Box>
    </StyledSectionInfo>
  )
}

export default TripView
