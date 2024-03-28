import React, { useState } from "react";
import "./sidebar.css";

import Pessoa from "../../../../core/models/Pessoa";
import { Link, ILink } from "../../../../core/models/Link";
import { Anchor } from "../../../shared/anchor";
import AuthService from "../../../../core/services/auth.service";
const auth =  new AuthService()
export interface sidebarProps {
  prop?: Pessoa;
}

export function Sidebar() {
  const [user, setUser] = useState(auth.getUser());


  const checkUser = () => {
    setUser(auth.getUser())
    const avatar = document.getElementById("avatar");
    // //console.log(avatar, user.foto);
    if (user.foto && avatar) avatar.style.backgroundImage = user.foto;
  };

  const links: ILink[] = [
    new Link("./", "Dashboard", ""),
    new Link("./extracts", "Extratos", ""),
    new Link("./accounts", "Contas", ""),
    new Link("./labels", "Categorias", ""),
    new Link("./calendary", "Calendário", ""),
  ];


  const logout= () => {

    auth.logout()
 
  }

  // checkUser();
  return (
    <div className="sidebar">
      <div className="userInfo align-items-center ">
        <div className="avatarContainer">
          <div className="avatar" id="avatar" onEnded={() => checkUser()}></div>
        </div>
        <span>Hello, <span className="userName">{`${user?.nome}`} </span></span>
      </div>
      <div className="link-list">
        <ul>
          {links.map((l: ILink) => {
            return <Anchor prop={{...l}}  />;
          })}
          <li className="clickable" onClick={() => logout()}>Logout</li>
        </ul>
      </div>
    </div>
  );
}
