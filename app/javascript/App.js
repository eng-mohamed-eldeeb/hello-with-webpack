import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Greeting from "./pages/Greeting";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  );
}
