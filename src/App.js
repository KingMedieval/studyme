import './App.css';
import MathCalc from "./components/pages/SAT/mathCalc/mathCalc";
import NotFound from "./components/pages/NotFound/NotFound";
import Textbook from "./components/pages/DE/Textbook";
import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

//TODO:
//  make per user sessions
//  question input page
//  encryption?
//  create randomized tests?
//      maybe shareable seed?

function Home() {
    return(
        <div className="App">
            <h1>
                HOMEPAGE
            </h1>
        </div>
    );
}
function App() {
  return (
      <>
          <Router>
            <Routes>
                <Route
                    path='*'
                    element={<NotFound />}
                />
                <Route
                    path="/"
                    element={<Home />}
                />
                 <Route
                     path="q/sat/math/c/:id"
                     element={<MathCalc />}
                 />
                <Route
                    path="q/DE/textbook/:source/:sec/:id"
                    element={<Textbook />}
                />
          </Routes>
      </Router>
      </>

  );
}

export default App;
