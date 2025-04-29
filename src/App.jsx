import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AppLayout from "./ui/AppLayout";
import Landing from "./pages/Landing";
import Spinner from "./ui/Spinner.jsx";
import { AudioContextProvider } from "./contexts/AudioContext.jsx";
const Contacts = React.lazy(() => import("./pages/Contacts.jsx"));
import "./index.css";
const About = React.lazy(() => import("./pages/About.jsx"));
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AudioContextProvider>
        <Routes>
          <Route index element={<Landing />} />
          <Route element={<AppLayout />}>
            <Route
              path="/about"
              element={
                <Suspense fallback={<Spinner />}>
                  <About />
                </Suspense>
              }
            />

            <Route
              path="/contacts"
              element={
                <Suspense fallback={<Spinner />}>
                  <Contacts />
                </Suspense>
              }
            />

            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </AudioContextProvider>
    </BrowserRouter>
  );
}

export default App;
