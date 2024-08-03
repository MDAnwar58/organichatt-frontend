"use client"; // Mark this component as a client-side component
import React, { useEffect } from "react";

export default function ClientComponent() {
  useEffect(() => {
    document.body.setAttribute("cz-shortcut-listen", true);
  }, []);

  return null; // This component doesn't render any UI
}
