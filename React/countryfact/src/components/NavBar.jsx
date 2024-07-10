import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <>
        <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244855', padding: '15px', color:'black' }}>
                <div className="container-fluid" style={{color:'black'}}>
                    <Link className="navbar-brand" to='/' >Countries Fact</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Continents
                                </a>
                                <ul className="dropdown-menu">
                                    {/* We will links to continents here */}
                                    <li><Link className="dropdown-item"   href="#">Africa</Link></li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            </header>
        </>
    )
}

export default NavBar