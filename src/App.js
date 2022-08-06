import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Footer from "./Components/Footer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/home" >
            <Home/>
          </Route>
          <Route exact path="/menu" >
            <Menu/>
          </Route>
          <Route exact path="/about" >
            <About/>
          </Route>
          <Route exact path="/contact" >
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
