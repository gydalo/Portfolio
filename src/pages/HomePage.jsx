import React from "react";
import {
  Layout,
  Home,
  Experience,
  Contact,
  Projects,
  About,
  ScrollToTopButton,
} from "../components";

/**
 * 
 * HomePage component for displaying the main sections of the portfolio.
 *
 * @component
 * @returns {JSX.Element} A complete project page with layout and all sections.
 */
function HomePage() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
      <ScrollToTopButton />
    </>
  );
}

export default HomePage;
