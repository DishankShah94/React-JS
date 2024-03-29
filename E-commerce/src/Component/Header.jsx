import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
// import "./assests/Header.css";
import { Link } from 'react-router-dom';
export default function App() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' className='body'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className='list'>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link to="/" className='text-white'>Home</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link className='text-white'>new arrivals</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link className='text-white'>store</Link>
                        </MDBNavbarItem  >
                        <MDBNavbarItem className='mr-auto m-2 mb-lg-0'>
                            <Link className='text-white'>contact us</Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <form className='d-flex input-group w-50 px-4'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn className='text-white btn-bg'><i class="fa-solid fa-magnifying-glass posi_ab"></i></MDBBtn>
                    </form>
                    <MDBNavbarItem >
                        <Link className='text-color px-4'><i class="fa-solid fa-2x  fa-bell"></i></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem className='  border border-top-0 border-bottom-0'>
                        <Link className='text-color px-4' to="/cart"><i class="fa-solid fa-2x fa-bag-shopping"></i></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBDropdown className='px-4'>
                            <MDBDropdownToggle tag='a' className='nav-link text-white' role='button' >
                                Dropdown
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className=' mt-4 mr body border text-center '>
                                <MDBDropdownItem className='my-2 drop2'>
                                    <Link className='drop'>my account</Link>
                                </MDBDropdownItem>
                                <MDBDropdownItem className='my-2 drop2'>
                                    <Link className='drop'>my orders</Link>
                                </MDBDropdownItem>
                                <MDBDropdownItem className='my-2 drop2'>
                                    <Link to="/login" className='drop'>Login</Link>
                                </MDBDropdownItem>
                                {/* <MDBDropdownItem className='my-2'>
                                    <Link to="/login" className='text-white py-2'>Login</Link>
                                </MDBDropdownItem> */}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}