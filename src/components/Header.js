import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo_257.png";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="Heritart"></img>
      </Link>

      <div className="connect_wallet">
        <button className="btn__connectWallet btn-sm">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Header;
