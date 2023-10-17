// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  text-base-content mt-20 :mx-0 ">
        <aside>
          <p className="text-lg">
            <span className="text-4xl text-[#ff3c3c] font-extrabold">
              MLWBD
            </span>
            <br />
            <span className="text-black/70">
              Providing entertainment since 2010
            </span>
          </p>
        </aside>

        <nav className="lg:ml-20">
          <header className="footer-title text-2xl text-red-600">
            Services
          </header>
          <a className="link text-lg link-hover">Movies</a>
          <a className="link text-lg link-hover">Web Series</a>
          <a className="link  text-lg link-hover">Drama</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl text-red-600">
            Useful Links
          </header>
          <a className="link text-lg link-hover">About Us</a>
          <a className="link text-lg link-hover">Contact US</a>
          <a className="link text-lg link-hover">Join US</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl text-red-600">
            Legal Policy
          </header>
          <a className="link text-lg link-hover">Terms of use</a>
          <a className="link text-lg link-hover">Privacy policy</a>
          <a className="link text-lg link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
