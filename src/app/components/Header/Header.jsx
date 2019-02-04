import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render = () => {
    return (
      <header>
        <Link to="/" className="header-title">
          React Redux Kanban Board
        </Link>
      </header>
    );
  };
}

export default Header;
