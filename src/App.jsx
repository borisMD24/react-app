import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Nav from "./components/nav/index"
import ThemeContext from "./components/themeContext/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import Work from "./components/work/index";

import './App.scss';

function App() {
  const firstSetup = () => {
    if (!localStorage.savedTheme) {
      localStorage.savedTheme = "light";
      return "light";
    } else if (localStorage.savedTheme === "night") {
      return "night";
    } else {
      localStorage.savedTheme = "light";
      return "light";
    }
  }
  let [theme, setTheme] = React.useState(firstSetup());
  const switchTheme = () => {
    if(theme === "light"){
      localStorage.savedTheme = "night";
      setTheme("night");
    } else {
      localStorage.savedTheme = "light";
      setTheme("light");
    }
  }
  const contextValue = {
    cssClassName : theme,
    switchTheme : switchTheme
  }
  return (

    <ThemeContext.Provider value = {contextValue}>
    <div className={`app ${contextValue.cssClassName}`}>
      <Router>
        <Nav/>
        <div className={`content ${contextValue.cssClassName}`}>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/work">
              <Work/>
            </Route>
        </div>
      </Router>
    </div>
      </ThemeContext.Provider>
  );
}

export default App;
