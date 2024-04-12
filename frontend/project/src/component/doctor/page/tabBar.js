import React, { useState, Component } from "react";
import "../css/tabBar.css";
import logo from "../img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function tabBar() {
  return (
    <header class="hearderBar">
      <div className="bar">
        <a href="/"><img class="img-logo" src={logo} alt="logo"/></a>
      </div>
    </header>
  );
}
