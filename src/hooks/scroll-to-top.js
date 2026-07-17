'use client';
import { ChevronsUp } from 'lucide-react';
import React, { useState, useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <button
      onClick={scrollTop}
      className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
      data-target="html"
    >
      <ChevronsUp size={18} />
    </button>
  );
};

export default ScrollToTop;
