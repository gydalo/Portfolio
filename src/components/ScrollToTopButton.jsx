import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

/**
 * ScrollToTopButton
 *
 * A floating button that appears after the user scrolls down 200px.
 * When clicked, it smoothly scrolls the page back to the top.
 *
 * @component
 * @returns {JSX.Element|null} The scroll-to-top button or null if not visible.
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button onClick={scrollToTop} className="scroll-to-top btn-white">
        <FontAwesomeIcon icon={faCaretUp} /> To Top
      </button>
    )
  );
};

export default ScrollToTopButton;
