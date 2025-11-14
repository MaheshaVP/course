import "@fontsource/roboto";
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import theme from "./assets/images/theme.js";
import { ThemeProvider } from "@emotion/react";
import Hero from "./components/Hero/Hero.jsx";
import Coffee from "./components/coffee/Coffee.jsx";


function App() {

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Coffee />
      </ThemeProvider>
      
    </div>
  )
}

export default App;