import React from "react";
import ReactDOM from "react-dom/client";

import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import Home from "./pages/Home/Home.tsx";
import CalcDate from "./pages/CalcDate/CalcDate.tsx";
import MemoCut from "./pages/MemoCut/MemoCut.tsx";

import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="" element={<Home />} />
          <Route path="calc-date" element={<CalcDate />} />
          <Route path="memo-cut" element={<MemoCut />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);