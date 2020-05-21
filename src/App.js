import React from "react";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";

// Styling
import { Description, GlobalStyle, ShopImage, Title } from "./styles";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Title>Cookies and Beyond</Title>
        <Description>Where cookie maniacs gather</Description>
        <ShopImage
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
        />
      </>
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
