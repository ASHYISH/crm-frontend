import React from "react";
import { Header } from "./partials/Header.comp";
import { Footer } from "./partials/Footer.comp";

export const DafaultLayout = ({ children }) => {
  return (
    <div className="deafult-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main"> {children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
