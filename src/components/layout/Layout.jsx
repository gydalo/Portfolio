import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout component that wraps the page.
 * It includes a header, a main content area, and a footer.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to render inside the layout
 * @returns {JSX.Element} Layout with header and footer
 */
export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
