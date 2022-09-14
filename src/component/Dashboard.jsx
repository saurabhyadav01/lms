import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../style/dashboard.css"
function Dashboard() {
  return (
    <>
      <Header />
      <div className="today-shedule">
        <div>
          <h3>Today's Schedule</h3>
        </div>
        <div className="bookmark-refer-earn">
          <Link to="/" style={{background:"black",color:"white",padding:"5px",textDecoration:"none",borderRadius:"2%",margin:"5px"}} >BOOKMARKS</Link>
          <Link to="/" style={{background:"black",color:"white",padding:"5px",textDecoration:"none",borderRadius:"5% 2% 0% 5%"}}>REFER & EARN</Link>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Dashboard;
