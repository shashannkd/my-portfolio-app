import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>

          {/* <Routes>
            <Route path="*" element={<div>404, Not Found</div>}></Route>
          </Routes> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
