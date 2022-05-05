import React from "react";
import { Headers } from "./Pages/Headers";
import { Router } from "./Routes/Router";
import GlobalState from "./global/GlobalState";
import "./App.css"



function App() {
  return (
    <div>
    
      <GlobalState>
       
        <Router />
      </GlobalState>

    </div>
    
  );
}

export default App;
