import React from "react";

import "./content.css";
import { Outlet } from "react-router-dom";

export interface contentProps {
  prop?: string;
}

export function Content({ prop = "default value" }: contentProps) {
  return (
    <div className="content">
      <span>{prop}</span>
      <Outlet />
    </div>
  );
}
