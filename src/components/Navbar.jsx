
import React from 'react';

function Navbar() {


    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h2>NutriSite</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex myForm">
                            <h2 style={{color: 'green'}}>Home</h2>
                        </form>
                        <form className="d-flex myForm">
                            <h2>Menu</h2>
                        </form>
                        <form className="d-flex myForm">
                            <h2>About</h2>
                        </form>
                        <form className="d-flex myForm">
                            <h2>Contact</h2>
                        </form>
                        <form className="d-flex myForm">
                            <h2>Reviews</h2>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
