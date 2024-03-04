import React, { useState } from "react";
import "./sidebar.css";

import Pessoa from "../../../../core/models/Pessoa";
import Link from "../../../../core/models/Link";

export interface sidebarProps {
  prop?: Pessoa;
}

export function Sidebar({
  prop = new Pessoa(
    1,
    "Mario Pitta",
    "03798865531",
    "mvk.pitta@gmail.com",
    "teste321",
    120000
  ),
}: sidebarProps) {
  // const [user, setUser] = useState(prop);

  const checkUser = () => {
    const avatar = document.getElementById("avatar");
    console.log(avatar, prop.foto);
    if (prop.foto && avatar) avatar.style.backgroundImage = prop.foto;
  };

  const links: Link[] = [
    new Link("./dashboard", "Dashboard"),
    new Link("./extratos", "Extratos"),
    new Link("./contas", "Contas"),
    new Link("./categorias", "Categorias"),
    new Link("./calendário", "Calendário"),
  ];

  return (
    <div className="sidebar">
      <div className="userInfo align-items-center ">
        <div className="avatarContainer">
          <div className="avatar" id="avatar" onEnded={() => checkUser()}></div>
        </div>
        <div className="joeDude">{`${prop.nome}`} </div>
      </div>
      <div className="link-list">
        <ul>
          {links.map((link) => {
            return (
              <a href={link.path}>
                <li>{link.label}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
