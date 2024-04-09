import React, { useState, Component } from "react";
import "../css/header.css";
import logo from "../img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Headers() {
  return (
    <header class="container d-flex justify-content-between mt-20 ">
      <div class="logo">
        <img class="img-logo" src={logo} />
      </div>
      <div>
        <button type="button" class="btn btn-outline-primary">
          Đăng nhập
        </button>
      </div>
    </header>
  );
}
