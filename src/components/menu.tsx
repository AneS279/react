import * as React from "react";
import "../app/styles/menu.css";
export function MenuSandwich() {
  let menuItems = [];
  for (let i = 0; i < 3; i++) {
    menuItems.push(<i key={i}></i>);
  }
  return (
        <header className="menuItems">
        <a>Clientes</a>
        <a>Estoque</a>
        <a>Pedidos</a>
        <a>Receitas</a>
      </header>
  );
}
