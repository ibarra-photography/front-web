import styled from "styled-components";

const HomePageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: "Cormorant Garamond", serif;
  margin: 3rem;
  margin-top: 4rem;
`;

const Title = styled("h1")`
  font-size: 3rem;
`;

export const HomePageStyles = { HomePageContainer, Title };
