import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_257.png";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      {/* logo on the left -> img */}
      <Link to="/">
        <img className="footer__logo" src={logo} alt="Heritart"></img>
      </Link>

      {/* 3 Links */}
      <div className="footer__nav">
        {/* Logo */}
        <div className="logo_container">
          <Link to="/" className="footer__optionLineLogo">
            <span className="footer__optionLineLogo">HERITART</span>
          </Link>
          <Link to="/" className="footer__logoDescription">
            <span className="footer__logoDescription">
              Inherit The Value of Creation
            </span>
          </Link>
        </div>
        <div className="footer__link tablet__hidden pc__hidden">
          <div className="footer__option  text-[#D9D9D9]">
            <span className="text-[20px] font-medium">
              All Copyrights Reserved @2023 Heritart.co
            </span>
            <div className="flex justify-start">
              <Link to="/terms_conditions" className="footer__link">
                <span className="links">Terms & Conditions</span>
              </Link>
              <Link to="/license_Agreement" className="footer__link">
                <span className="links">License Agreement</span>
              </Link>
              <Link to="/nft_agreeement" className="footer__link">
                <span className="links">NFT Agreement</span>
              </Link>
              <Link to="/legal_rights" className="footer__link">
                <span className="links">Legal Rigths</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__social">
        <div className="flex text-[30px] gap-x-12 max-w-max mx-auto lg:mx-0">
          <a href="https://twitter.com/heritart_io">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/heritart_io/">
            <FaInstagram />
          </a>
          <a href="https://discord.gg/9QJ9FVY8">
            <FaDiscord />
          </a>
          {/** Opensea */}
          <a href="https://opensea.io/Heritart_Official">
            <FaGithub />
          </a>
          <a href="https://medium.com/@heritart">
            <FaMedium />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
