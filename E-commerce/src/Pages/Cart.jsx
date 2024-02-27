import axios from "axios";
import { MDBCard, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBCardBody } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const getCartData = () => fetch("http://localhost:5000/cart")
        .then((response) => response.json())
        .then((data) => { setCart((currentData) => [...currentData, ...data]) })


    useEffect(() => {
        getCartData();
    }, [])
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cart/${id}`);
            console.log("Post deleted:", id);
            setCart((currentData) => currentData.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    return (<>
        <MDBContainer>
            <MDBRow>
                {cart.map((cart, index) => (

                    <MDBCol md="6" lg="4" sm="12" key={index}>
                        {/* <Link to={"/productsdetails/" + product.id}> */}
                        <MDBCard>
                            {/* <MDBCardImage src={product.image} position='top' alt='...' style={{ width: "400px", height: "300px" }} /> */}
                            <MDBCardBody>
                                {/* <MDBCardTitle>{cart.}</MDBCardTitle> */}
                                <MDBCardText>
                                    <div className="cart_summary p-3">
                                        <div className="summary_title">
                                            <h2 className="text-center">cart summary</h2>
                                        </div>
                                        <div className="px_15 dashed_btm total_items d-flex justify-content-between">
                                            <h3 className="txt_cap">items in cart</h3>
                                            <h3>{cart.value}</h3>
                                            {/* <input type="text" name="value" value={value} /> */}
                                        </div>

                                        <div className="px_15 dashed_btm cart_total d-flex justify-content-between">
                                            <h3 className="txt_cap">cart total price</h3>
                                            <h3>&#8377;{cart.finalAmount}</h3>
                                            {/* <input type="text" name="finalAmount" value={finalAmount} /> */}
                                        </div>


                                        <div className="d-flex justify-content-between">
                                            <h3 className="txt_cap my-1">cart Discount</h3>
                                            <h3>&#8377;{cart.discount}</h3>
                                            {/* <input type="text" name="finalAmount" value={finalAmount} /> */}
                                        </div>
                                        <div className="checkout">
                                            <button className="w-100 bg-warning py-2 mt-2 rounded-3" onClick={() => deletePost(cart.id)}>Remove</button>
                                        </div>
                                        <div>
                                            <Link to="/login" className="d-block mt-3 text-center text-black p-3 bg-warning bg-gradient rounded-3">BuyNow</Link>
                                        </div>
                                    </div>
                                </MDBCardText>
                                {/* <MDBBtn href='#'>Many nore</MDBBtn> */}
                            </MDBCardBody>
                        </MDBCard>
                        {/* </Link> */}
                    </MDBCol>

                ))}
            </MDBRow>
        </MDBContainer>
    </>);
}

export default Cart;