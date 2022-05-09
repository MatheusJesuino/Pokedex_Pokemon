import React from "react";
import { Headers } from "./Pages/Headers";
import { Router } from "./Routes/Router";
import GlobalState from "./global/GlobalState";
import "./App.css"
import { extendTheme, ChakraProvider } from '@chakra-ui/react'



const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}


const theme = extendTheme({ config })
  
function App() {
  return (
    <div>
    
      <GlobalState>
      <ChakraProvider theme={theme} resetCSS={false} >
      
        <Headers/>

        <Router />
        </ChakraProvider>
      </GlobalState>

    </div>
    
  );

}

export default App;
