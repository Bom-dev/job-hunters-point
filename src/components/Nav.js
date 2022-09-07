import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link to='/account'>
                        <h3>Account</h3>
                    </Link>
                    <Link to='/applications'>
                        <h3>Application</h3>
                    </Link>
                    <Link to='/archives'>
                        <h3>Archive</h3>
                    </Link>
                    <Link to='/interviews'>
                        <h3>Interview</h3>
                    </Link>
                </nav>
            </header>
            Nav is working
        </div>
    )
}

export default Nav