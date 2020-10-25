import styled from "styled-components"

export const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  overflow: hidden;
  margin: auto;
  margin: 15px;

  @media (max-width: 540px) {
    margin: 15px 0;
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 5;
  }
`
