import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBookPageContainer from "./components/AllBookPageContainer";
import BookPageContainer from "./components/BookPageContainer";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route
              exact
              path="/"
              Component={AllBookPageContainer}
            />
            <Route
              path="/book/:id"
              Component={BookPageContainer}
            />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
