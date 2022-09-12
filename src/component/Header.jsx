import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css"
function Header() {
  return (
    <>
      <div className="container">
        <div className="header-link">
          <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
          <Link  to="/" style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Lecture</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Assignment</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Quizze</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>TicketS</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Discussions</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Notifations</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Messages</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Elective</Link>
          <Link to="/"  style={{textDecoration:"none",fontSize:"16px",padding:".5%"}}>Course</Link>
        </div>
        <div className="login-user">
          <h3 style={{textDecoration:"none",fontSize:"16px"}}>Login</h3>
        </div>
      </div>
    </>
  );
}

export default Header;
