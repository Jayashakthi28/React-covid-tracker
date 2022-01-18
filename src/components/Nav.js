import { NavLink, useLocation } from "react-router-dom";

function Nav(){
    const location=useLocation().pathname;
    const navRender=location.search(/^\/india*/gi);
    return(
        <nav className="navbar">
            <h2>Covid Tracker</h2>
            {(navRender===0)?"":<NavLink to={"/india"}>Covid Cases in India</NavLink>}
        </nav>
    )
}

export default Nav;