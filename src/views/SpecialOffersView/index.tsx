import React from "react"

// Modules
import Slider from "react-slick"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// Components
import { StyledSectionInfo } from "./styles"
import { Typography, Box, Button } from "@material-ui/core"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HolidaysAtBalticSeaImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sea-beach-sand-sun.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const SpecialOffersView: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <StyledSectionInfo>
      <Box textAlign="center">
        <Typography variant="h1" component="h2" color="primary">
          OFERTY SPECJALNE
        </Typography>
        <Typography variant="h5">zapoznaj się z Naszymi nowościami</Typography>

        <Box margin="50px 0">
          <Slider {...settings}>
            <Box>
              <Box display="flex">
                <Box
                  width="50%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  padding="25px"
                >
                  <Typography variant="h3">
                    Wakacje? Tylko nad Bałtykiem!
                  </Typography>
                  <Typography>
                    Już teraz zapraszamy Państwa na wyczekiwany odpoczynek w
                    nadmorskiej miejscowości Dźwirzyno (pod Kołobrzegiem).
                    Zapewniamy niesamowitą atmosferę!
                  </Typography>
                  <Button color="primary">Test</Button>
                </Box>
                <Box width="50%">
                  <HolidaysAtBalticSeaImg />
                </Box>
              </Box>
            </Box>
            <Box>
              <Box display="flex">
                <Box width="50%">
                  <HolidaysAtBalticSeaImg />
                </Box>
                <Box
                  width="50%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  padding="25px"
                >
                  <Typography variant="h3">
                    Wakacje? Tylko nad Bałtykiem!
                  </Typography>
                  <Typography>
                    Już teraz zapraszamy Państwa na wyczekiwany odpoczynek w
                    nadmorskiej miejscowości Dźwirzyno (pod Kołobrzegiem).
                    Zapewniamy niesamowitą atmosferę!
                  </Typography>
                  <Button color="primary">Test</Button>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>

        <br />
        <br />
      </Box>
    </StyledSectionInfo>
  )
}

export default SpecialOffersView
