import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ChangeColor from "./components/State-Update/ChangeColor";
import Parent from "./components/State-Lift/Parent";
import Mycontext from "./components/Context-API/my-context";
import Consumer from "./components/Context-API/Consumer";
import Getcomments from "./components/HTTP-calls/Getcomments";
import useCounter from "./components/Custom-hook/useCounter";
import Counter from "./components/Redux/Counter";
import CounterToolkit from "./components/Redux-Toolkit/CounterToolkit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Routing/Home";
import About from "./components/Routing/About";
import Contact from "./components/Routing/Contact";
import PageNotFound from "./components/Routing/PageNotFound";
import Welcome from "./components/Routing/Welcome";
import Nested from "./components/Routing/Nested";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setLoginStatus((prevState) => (prevState = !prevState));
  };

  const toggleHandler = () => {
    setToggle((prevState) => (prevState = !prevState));
  };
  const counter = useCounter(toggle);

  return (
    <div className="App">
      <Mycontext.Provider value={{ loginStatus: loginStatus }}>
        <ChangeColor />
        <hr />
        <Parent />
        <hr />
        <Consumer />
        <button onClick={clickHandler}>
          {loginStatus ? "logout" : "login"}
        </button>
        <hr />
        {/* <Getcomments /> */}
        <hr />
        {/* <div>{counter}</div>
        <button onClick={toggleHandler}>Toggle Counter</button> */}
        <Counter />
        <hr />
        <CounterToolkit />
        <hr />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
