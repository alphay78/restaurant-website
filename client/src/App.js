import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./components/Home ";
import About from "./components/About";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route path="/about" component={<About/>} />
      </Routes>
    </Router>
  );
};

export default App;
