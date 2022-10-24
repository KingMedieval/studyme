import './App.css';
import Question from './components/elements/Question/Question.jsx'
import MathCalc from "./components/pages/SAT/mathCalc/mathCalc";
import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

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
      <Router>
          <Routes>
              <Route
                  path="/"
                  element={<Home />}
              />

              <Route
                  path="q/sat/math/c/:id"
                  element={<MathCalc />}
              />
          </Routes>
      </Router>
  );
}

export default App;
