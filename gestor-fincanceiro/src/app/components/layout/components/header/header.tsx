import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Sidebar } from "../sidebar";
import { FaPowerOff } from "react-icons/fa";
import AuthService from "../../../../core/services/auth.service";
const auth = new AuthService()


export interface headerProps {
  prop?: string;
}

export function Header({ prop = "default value" }: headerProps) {

  //console.log("redering header")
  const [showSideBar, setShowSideBar] = useState(false);
  function toggleSideBar(show: boolean) {
    setShowSideBar(show);
  }

  function handleLogoff(): void {
    auth.logout()
  }

  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand href="/" className="appTitle">Cash Manager</Navbar.Brand>
      <FaPowerOff  className="shutdown-btn" size={24} color="white" onClick={() => handleLogoff()}></FaPowerOff>
    </Navbar>
  );
}
