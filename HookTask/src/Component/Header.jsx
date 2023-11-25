import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
  
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-evenly'>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/">Home</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/about">About Us</Link>

                            {/* <MDBNavbarLink href='#'>Link</MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/contact">Contact Us</Link>

                            {/* <MDBNavbarLink href='#'>Link</MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className='nav-link' to="/example">Example</Link>

                            {/* <MDBNavbarLink href='#'>Link</MDBNavbarLink> */}
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}