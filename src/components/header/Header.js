import React from "react";

import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {
    return (
         <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"  alt="logo"/></Link>
                <Link to="/movies/popular" className="head"><span>Popular</span></Link>
                <Link to="/movies/top_rated" className="head"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" className="head"><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;