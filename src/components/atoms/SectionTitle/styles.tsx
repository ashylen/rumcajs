import styled from "styled-components"

export const StyledSectionTitle = styled.h2`
  display: inline-block;
  margin-top: 70px;
  position: relative;

  &:before {
    content: "";
    width: 80%;
    position: absolute;
    top: -10px;
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
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`
