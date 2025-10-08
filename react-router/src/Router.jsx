import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UseState from "./pages/UseState";  // updated import
import PropDrilling from "./pages/PropDrilling";
import ContextExample from "./pages/ContexExample";

const AppRouter = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">useState & useEffect</Link>
        <Link to="/prop-drilling">Prop Drilling</Link>
        <Link to="/context">Context</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UseState />} />  {/* updated component */}
        <Route path="/prop-drilling" element={<PropDrilling />} />
        <Route path="/context" element={<ContextExample />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
