import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../loan-tracker/src/pages/Home";
import Loans from "../loan-tracker/src/pages/Loans";
import Analytics from "../loan-tracker/src/pages/Analytics";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 text-white bg-blue-700">
        <Link to="/">Home</Link>
        <Link to="/loans">Loans</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
