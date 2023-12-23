import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./assests/SpecialOffers.css"
import { Link } from 'react-router-dom';
const SpcialOffers = () => {

    return (<>
        <MDBContainer>
            <MDBRow>
                <h2 className='m-3'>Special Offers</h2>
                <MDBCol size='7' lg="7" md="12" sm="12">
                    <div className="position-relative my-3">
                        <img className="w-100 square bg-primary rounded-5" src="./assets/images/banner-img-1.png" alt="" />
                        <div className="banner_text_1 position-absolute bottom-0 start-0">
                            <h2 className="mt-3 ps-3 text-white txt_cap">high quality</h2>
                            <h2 className=" mt-3 ps-3 text-white txt_cap">furniture</h2>
                            <p className=" mt-3 ps-3 text-white w-75">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected </p>
                        </div>
                        <button class="position-absolute end-0 bottom-0 txt_cap banner_btn_1">explore now</button>
                    </div>
                </MDBCol>
                <MDBCol size='3' lg="5" md="12" sm="12  ">
                    <div className="position-relative my-3">
                        <img className="w-100 square bg-primary rounded-5" src="./assets/images/banner-img-2.png" alt="" />
                        <div className="banner_text_2 position-absolute bottom-0 start-0">
                            <h3 className="mt-3 ps-3 text-white txt_cap mt-3">Discount Upto</h3>
                            <h2 className='mt-3 ps-3 text-white'>70%</h2>
                            <p className="mt-3 ps-3 text-white font_1rem w-75">There are many variations of
                                passages of Lorem Ipsum available,</p>
                        </div>
                        <button class="position-absolute bottom-0 end-0 txt_cap">Buy now</button>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6" lg="12">

                    <Link to="./allProduct" className='back-color text-black px-3 py-2 square rounded-3'>All Product</Link>
                    <Link to="./allProduct" className='back-color text-black mx-2 px-3 py-2 square rounded-3'>All Product</Link>
                    <Link to="./allProduct" className='back-color text-black mx-2 px-3 py-2 square rounded-3'>All Product</Link>
                    <Link to="./allProduct" className='back-color text-black mx-2 px-3 py-2 square rounded-3'>All Product</Link>
                    <Link to="./allProduct" className='back-color text-black mx-2 px-3 py-2 square rounded-3'>All Product</Link>


                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>);
}

export default SpcialOffers;