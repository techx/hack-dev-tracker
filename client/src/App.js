import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";
import ProjectsList from "./components/ProjectsList";
import TestSelectComponent from "./components/TestSelectComponent";
import SimpleProgressTest from "./components/SimpleProgressTest";
import SimpleSelectTest from "./components/SimpleSelectTest";
import "./App.css";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/test-select" element={<TestSelectComponent />} />
          <Route path="/test-progress" element={<SimpleProgressTest />} />
          <Route path="/test-simple-select" element={<SimpleSelectTest />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
