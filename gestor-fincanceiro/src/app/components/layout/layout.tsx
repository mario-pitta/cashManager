import React from "react";

import "./layout.css";
import { Content, Sidebar, Header, Footer } from "./components";

export interface layoutProps {
  prop?: string;
  children?: Element;
}

export function Layout({ prop = "layout rendering" }: layoutProps) {
  //console.log(prop)
  return (
    <div className="layout">
      <Header />
      <div className="only-md">
        <Sidebar />
      </div>
      <Content />

      <Footer />
    </div>
  );
}
