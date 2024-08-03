"use client";
import { useState, useEffect } from "react";

export default function usePathname() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
    };

    // Initial pathname set
    handleRouteChange();

    // Listen for popstate event to handle browser navigation
    window.addEventListener("popstate", handleRouteChange);

    // Return cleanup function
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return pathname;
}
