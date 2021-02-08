import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return(
        <header className="mainHeader">
            <h3 className="siteName">
                <Link to="/" className="link">
                    OpenKaraoke
                </Link>
            </h3>
            <nav className="headerNav">
                <Link to="/" className="link linkItem linkItem__home">
                    Home
                </Link>
                <Link to="/List" className="link linkItem linkItem__list">
                    List
                </Link>
            </nav>
        </header>
    )
}

export default Header;