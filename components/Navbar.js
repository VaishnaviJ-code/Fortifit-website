"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>FortiFit</h1>
      
      {/* Desktop Menu */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Classes</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#contacts">Contacts</a></li>
        <li><a href="#signup" className={styles.signup}>Sign Up Today</a></li>
      </ul>
      
      {/* Mobile Menu Icon */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}