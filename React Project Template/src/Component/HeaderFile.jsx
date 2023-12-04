import React, { useState } from 'react';

export default function HeaderFile() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div className="banner_header_top_wthree">
            <div className="agileits-logo">
                <h1><a href="index.html"> <i className="fa fa-scissors" aria-hidden="true"></i> Stitchery</a></h1>
            </div>
            <div className="header-top_agileits">
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header navbar-left">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                            <nav className="link-effect-2" id="link-effect-2">
                                <ul className="nav navbar-nav">
                                    <li className="active scroll"><a href="index.html"><span data-hover="Home">Home</span></a></li>
                                    <li><a href="#welcome" className="scroll"><span data-hover="About">About</span></a></li>
                                    <li><a href="#services" className="scroll"><span data-hover="Services">Services</span></a></li>
                                    <li className="dropdown">
                                        <a href="#" onClick={() => { setShowBasic(!showBasic) }} className="dropdown-toggle" data-toggle="dropdown"><span data-hover="Drop Down">Drop Down</span> <b className="caret"></b></a>
                                        <ul className={showBasic ? "display-block dropdown-menu" : "agile_short_dropdown"} style={{ position: 'absolute', top: "20px", left: "20px", padding: "20px", boxShadow: ".5px .5px .5px .5px #808080" }}>
                                            <li><a href="#team" className="scroll" style={{ padding: "10px 0" }}>Team</a></li>
                                            <li><a href="#gallery" className="scroll" style={{ padding: "10px 0" }}>Gallery</a></li>
                                            <li><a href="#clients" className="scroll" style={{ padding: "10px 0" }}>Clients</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#contact" className="scroll"><span data-hover="Contact">Contact</span></a></li>
                                </ul>
                            </nav>
                            <div className="w3_agile_phone">
                                <p><i className="fa fa-phone" aria-hidden="true"></i> +123 234 233</p>
                            </div>
                        </div>

                    </nav>

                </div>
            </div>
        </div>
    );
}