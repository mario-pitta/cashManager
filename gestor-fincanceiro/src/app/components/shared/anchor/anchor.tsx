import React from "react";
import styles from './anchor.module.css'

import "./anchor.module.css";
import { ILink } from "../../../core/models/Link";
import { Link } from "react-router-dom";

export interface AnchorProps {
  prop: ILink;
}

export function Anchor({
  prop = {
    path: "",
    label: "",
    icon: "",
  },
}) {
  return (
    <li>
      <Link to={prop.path} className={styles.sideBarLink}>{prop.label}</Link>
    </li>
  );
}
