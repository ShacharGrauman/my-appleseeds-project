import React from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="#">AppleSeeds</a> */}
                <Link className="navbar-brand" to="/">AppleSeeds</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About</a> */}
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About</a> */}
                            <Link className="nav-link" to="/all-recipes">All Recipes</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;