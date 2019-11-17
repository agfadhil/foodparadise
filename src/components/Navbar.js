import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <Link className="navbar-brand text-white" to="/">
      Muhammad Agung Fadhil (41518120059) - Tugas Rapid
    </Link>
  </nav>
);

export default Navbar;
