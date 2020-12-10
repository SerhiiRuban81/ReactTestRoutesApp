import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu(){
    return (
        <>
        <Link to="/" className="links">Main</Link>
        <Link to="/news/" className="links">News</Link>
        <Link to="/about" className="links">About</Link>
        <Link to="/hire" className="links">Hire</Link>
        </>
    )
}