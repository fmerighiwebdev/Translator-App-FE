import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./components/Home";
import Languages from "./components/Languages";
import Header from "./components/Header";
import Detect from "./components/Detect";
import Translate from "./components/Translate";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/languages"
          element={
            <>
              <Header />
              <Languages />
            </>
          }
        />
        <Route
          path="/detect"
          element={
            <>
              <Header />
              <Detect />
            </>
          }
        />
        <Route
          path="/translate"
          element={
            <>
              <Header />
              <Translate />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
