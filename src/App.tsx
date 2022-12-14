import React from "react";
import SignBoard from "./page/SignBoard/SignBoard";
import SignPad from "./page/SignPad/SignPad";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/SignPad" element={<SignPad />} />
          <Route path="/SignBoard" element={<SignBoard />} />
          <Route path="*" element={<Navigate replace to="/SignPad" />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
