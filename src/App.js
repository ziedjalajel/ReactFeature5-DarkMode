// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import {useState} from "react"


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [CurrentTheme,setCurrentTheme]=useState(theme.light)
  const DeployTheme =()=>{
    if(CurrentTheme===theme.light){
      setCurrentTheme(theme.dark)
    }else setCurrentTheme(theme.light)
  }
  return (
    <ThemeProvider theme={CurrentTheme}>
      <GlobalStyle />
      <ThemeButton onClick={DeployTheme}>
        {CurrentTheme === theme.light ? "Dark Theme" : "Light Theme"}
      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
