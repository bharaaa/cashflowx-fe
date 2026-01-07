import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./features/dashboard/Dashboard";

async function loadFlyonUI() {
  return import("flyonui/dist/accordion.js");
}

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   const initFlyonUI = async () => {
  //     await loadFlyonUI();
  //   };

  //   initFlyonUI();
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (
  //       window.HSAccordion &&
  //       typeof window.HSAccordion.autoInit === "function"
  //     ) {
  //       window.HSAccordion.autoInit();
  //     }
  //   }, 100);
  // }, [location.pathname]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
