import React from "react";
import { Link } from "react-router-dom";

const nav = {
    display: "flex",
    justifyContent: "center",
    gap: "10px 30px",
    flexFlow: "row wrap"
}

const Nav = () => {
    return (
        <div>
            <header>
                <Link to='/'>
                    <h1>job-hunters-point</h1>
                </Link>
                <nav style={nav}>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link to='/applications'>
                        <h3>Application</h3>
                    </Link>
                    <Link to='/studies'>
                        <h3>Study</h3>
                    </Link>
                    <Link to='/interviews'>
                        <h3>Interview</h3>
                    </Link>
                    <Link to='/archives'>
                        <h3>Archive</h3>
                    </Link>
                    <Link to='/account'>
                        <h3>Account</h3>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Nav