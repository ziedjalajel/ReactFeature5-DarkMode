// Components
import CookieList from "./components/ProductList";
// Styling
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
