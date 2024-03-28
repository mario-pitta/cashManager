import React from "react";

import "./footer.css";

import {
  FaHouseDamage,
  FaList,
  FaPiggyBank,
  FaPlus,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export interface footerProps {
  prop?: string;
}

export function Footer({ prop = "default value" }: footerProps) {
  return (
    <div className="footer ">
      <div className="container d-flex justify-content-around align-items-center gap-2">
        <Link to={"/"} className="iconDefault">
          <FaHouseDamage size={48}></FaHouseDamage>
        </Link>
        <Link to={"/extracts"} className="iconDefault">
          <FaList size={48}></FaList>
        </Link>
        
          <FaPlus size={72} fill="lightgray"></FaPlus>
        
        <Link to={"/accounts"} className="iconDefault">
          <FaPiggyBank size={48}></FaPiggyBank>
        </Link>
        <Link to={"/calendary"} className="iconDefault">
          <FaRegCalendarAlt size={48}></FaRegCalendarAlt>
        </Link>
      </div>
    </div>
  );
}
