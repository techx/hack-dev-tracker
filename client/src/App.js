import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";
import ProjectsList from "./components/ProjectsList"; // Assuming there is a component to list all projects
import TestSelectComponent from "./components/TestSelectComponent"; // Import the TestSelectComponent
import SimpleProgressTest from "./components/SimpleProgressTest"; // Import the SimpleProgressTest component
import "./App.css";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsList />} />{" "}
          {/* Added this line */}
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/test-select" element={<TestSelectComponent />} />{" "}
          {/* New route for testing Select component */}
          <Route path="/test-progress" element={<SimpleProgressTest />} />{" "}
          {/* New route for testing Progress component */}
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
