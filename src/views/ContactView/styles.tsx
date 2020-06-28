import styled from "styled-components"
import { StyledSectionWrapper } from "utils/SharedStyles"

export const StyledSectionInfo = styled(StyledSectionWrapper)`
  background-color: ${({ theme }) => theme.palette.common.white};

  h2 {
    display: inline-block;
    margin-top: 60px;
    margin-bottom: 60px;
    position: relative;

    &:before {
      content: "";
      width: 80%;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      right: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }

    &:after {
      content: "";
      width: 60%;
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      right: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`
