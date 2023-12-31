import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";


const Card = () => {
    const location = useLocation();
    const { id } = useParams();
    const { productDetails, value, finalAmount, discount } = location.state || {};
    // console.log('Card Component Data:', productDetails, value, finalAmount, discount);

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/allProducts/${id}`);
            // console.log(imgBasePath);
            // console.log('Response status:', response.status);

            const responseBody = await response.text();
            // console.log('Response body:', responseBody);

            if (!responseBody.trim()) {
                throw new Error('Empty response body');
            }
            const productData = JSON.parse(responseBody);
            const imgBasePath = `http://localhost:5000/${productData.image}`;
            productData.image = imgBasePath;
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };
    useEffect(() => {
        fetchProductDetails();
    }, []);
    return (<>
        <MDBContainer>
            <MDBRow className="m-3">
                <MDBCol lg={6} className="d-flex align-center">
                    <img
                        src={productDetails.image}
                        className="card-img-top img_cart w-75"
                        alt={productDetails.title}
                    />
                </MDBCol>
                <MDBCol lg={6}>
                    <div className="cart_summary p-3 my-4">
                        <div className="summary_title">
                            <h2>cart summary</h2>
                        </div>
                        <div className="px_15 dashed_btm total_items d-flex justify-content-between">
                            <h3 className="txt_cap">items in cart</h3>
                            <h3>{value}</h3>
                        </div>

                        <div className="px_15 dashed_btm cart_total d-flex justify-content-between">
                            <h3 className="txt_cap">cart total price</h3>
                            <h3>&#8377;{finalAmount}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3 className="txt_cap">items in cart</h3>
                            <h3>{value}</h3>
                        </div>

                        <div className="d-flex justify-content-between">
                            <h3 className="txt_cap">cart total price</h3>
                            <h3>&#8377;{finalAmount}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <h2 className="txt_up">you pay<span className="tax"> (Inclusive of All Taxes)</span>
                                </h2>
                                <h3>&#8377;{finalAmount}</h3>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4 className="txt_up">you saved</h4>
                            <h3>&#8377;{discount}</h3>
                        </div>
                    </div>
                    <MDBBtn className='d-block mx-auto' color='success'>
                        <Link to="/login" className="text-white">Buy Now</Link>
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    </>);
}

export default Card;
