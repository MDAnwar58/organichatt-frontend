import React from "react";

export default function NavItem({ children, className }) {
  return <li className={className}>{children}</li>;
}
