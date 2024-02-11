import { MDBCard, MDBCardImage, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import "../Component/assests/ProductDetails.css";
import CustomHookAllProduct from "../Component/Hooks/CustomHookAllProduct";
const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState();
    let { id } = useParams();
    const [value, setValue] = useState("1");
    const [mrp, setMrp] = useState();
    const [amount, setAmount] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);
    const { handleInputChange, inp, setInp } = CustomHookAllProduct({ value: "", finalAmount: "", discount: "" }, {})
    // console.log(productId);
    const data = async (productId, selectedValue) => {
        const res = await fetch(`http://localhost:5000/allProducts/${productId}`);
        // console.log(res.stat);
        const responseId = await res.text();
        if (!responseId.trim()) {
            throw new Error('Empty response body');
        }
        const productData = JSON.parse(responseId);
        // console.log(setValue(value));
        const quantity = parseInt(selectedValue, 10);
        // const amount = Number(productData.price);
        // const amount = parseInt(parseFloat(productData.price) * 1000, 10);
        const cleanPrice = productData.price.replace(/\D/g, ''); //remove non numeric character
        const amount = parseInt(cleanPrice, 10);
        console.log(amount);
        const totalAmount = amount * quantity;
        setMrp(amount);
        setAmount(totalAmount);
        console.log(totalAmount);
        console.log(quantity);
        const retailDiscount = totalAmount * 10 / 100;
        setDiscount(retailDiscount);
        // console.log(retailDiscount);
        const finalPrice = totalAmount - retailDiscount;
        setFinalAmount(finalPrice);
        // console.log(productDetails.price);
        // console.log(value);
    }
    const remove = () => {
        setMrp("");
        setAmount("");
        setDiscount("");
        setFinalAmount("");
    }
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
            setProductDetails(productData);
            data(id, value);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };
    useEffect(() => {
        fetchProductDetails();
    }, []);

    if (!productDetails) {
        return <p>Loading...</p>;
    }
    const saveData = () => {
        const requestData = {
            ...inp,  // Include data from the state
            value,
            finalAmount,
            discount

            // Include retail value
        };
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                // Handle success or further actions
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (<>
        <MDBContainer>
            <MDBRow className="d-flex justify-content-between">
                <MDBCol className="mt-4 card cart_card" md="12" sm="12" lg="7" >
                    <MDBRow>
                        <MDBCol className="category_img">
                            <div className="cart_product_img">
                                <img
                                    src={productDetails.image}
                                    className="card-img-top img_cart w-100"
                                    alt={productDetails.title}
                                />
                            </div>
                            <div className="cart_product_text">
                                <h2 class="txt_cap">enter pincode for delivery details</h2>
                            </div>
                            <div className="cart_product_btn">
                                <Link to='/' className="txt_cap move_wishlist card2">move to wishlist</Link>
                                <button className="remove" onClick={() => remove()}>Remove</button>
                            </div>
                        </MDBCol>

                        <MDBCol className="">
                            <div className="cart_product_title">
                                <h2>Acropolis Sheesham Wood King Size Bed In Provincial Teak Finish With Drawer Storage</h2>
                            </div>
                            <div className="quantity">
                                <select name="quantity" id="quantity" onChange={(event) => { setValue(event.target.value); data(id, event.target.value) }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                                <h3 className="txt_up">mrp</h3>
                                <h3 id="mrp">&#8377;{productDetails.price}</h3>
                            </div>

                            <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                                <h3 className="text-capitalize">Amount</h3>
                                <h3 id="amount_by_quantity">{amount}</h3>
                            </div>

                            <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                                <h3 className="text-capitalize">retail discount</h3>
                                <input type="hidden" name="discount_percent" value="10" id="discount_percent" />
                                <h3 id="retail_discount">-&#8377;{discount}</h3>
                            </div>

                            <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                                <h3 className="text-capitalize">item price</h3>
                                <h3 id="item_price">&#8377;{finalAmount}</h3>
                            </div>
                            <div className="warranty d-flex mt-3">
                                <input className="warranty" type="checkbox" />
                                <div className="warranty_text align-content-center">
                                    <h4>1 Year of Furniture Protection</h4>
                                    <p className="margin-bot">Only ₹9/Day</p>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* <MDBCol>
                    <div className="cart_product_title">
                        <h2>Acropolis Sheesham Wood King Size Bed In Provincial Teak Finish With Drawer Storage</h2>
                    </div>
                    <div className="quantity">
                        <select name="quantity" id="quantity" onChange={(event) => data(id, setValue(event.target.value))}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                        <h3 className="txt_up">mrp</h3>
                        <h3 id="mrp">&#8377;{productDetails.price}</h3>
                    </div>

                    <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                        <h3 className="text-capitalize">Amount</h3>
                        <h3 id="amount_by_quantity">&#8377;84999</h3>
                    </div>

                    <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                        <h3 className="text-capitalize">retail discount</h3>
                        <input type="hidden" name="discount_percent" value="10" id="discount_percent" />
                        <h3 id="retail_discount">-&#8377;14,335</h3>
                    </div>

                    <div className="mrp_retail px_15 dashed_btm d-flex justify-content-between">
                        <h3 className="text-capitalize">item price</h3>
                        <h3 id="item_price">&#8377;70,624</h3>
                    </div>

                    <div className="warranty d-flex mt-3">
                        <input className="warranty" type="checkbox" />
                        <div className="warranty_text align-content-center">
                            <h4>1 Year of Furniture Protection</h4>
                            <p className="margin-bot">Only ₹9/Day</p>
                        </div>
                    </div>
                </MDBCol> */}
                <MDBCol>
                    {/* <div className="cart_card"> */}
                    <div className="pincode posi_rel mt-5">
                        <input type="text" className="w-100 square rounded-start p-3 " placeholder="Enter Pincode" />
                        {/* <i class="posi_ab locate fa-solid fa-location-crosshairs"></i> */}
                    </div>
                    {/* </div> */}
                    <div className="coupan">
                        <p className="text-capitalize">apply coupan</p>
                        <h4 style={{ color: "#67AD5B" }}>You Earned 14125 Extra Credits Worth ₹14,125 for
                            Your Next Purchase, Credits Expire in 14 Days.</h4>
                    </div>
                    <div className="cart_summary p-3">
                        <div className="summary_title">
                            <h2>cart summary</h2>
                        </div>
                        <div className="px_15 dashed_btm total_items d-flex justify-content-between">
                            <h3 className="txt_cap">items in cart</h3>
                            {/* <h3>{value}</h3> */}
                            <input type="text" name="value" value={value} />
                        </div>

                        <div className="px_15 dashed_btm cart_total d-flex justify-content-between">
                            <h3 className="txt_cap">cart total price</h3>
                            {/* <h3>&#8377;{finalAmount}</h3> */}
                            <input type="text" name="finalAmount" value={finalAmount} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3 className="txt_cap">items in cart</h3>
                            <h3>{value}</h3>
                            {/* <input type="text" name="finalAmount" value={value} /> */}
                        </div>

                        <div className="d-flex justify-content-between">
                            <h3 className="txt_cap my-1">cart total price</h3>
                            {/* <h3>&#8377;{finalAmount}</h3> */}
                            <input type="text" name="finalAmount" value={finalAmount} />
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
                            {/* <h3>&#8377;{discount}</h3> */}
                            <input type="text" value={discount} name="discount" />
                        </div>

                    </div>
                    <div className="gstin d_flex align_center justify_spc_btw">
                        <p>Use GSTIN For Business Purchase (Optional)</p>
                        {/* <i class="fa-solid fa-chevron-right"></i> */}
                    </div>
                    <div className="checkout">
                        {/* <Link to={`/card/${id}`} onClick={saveData} state={{ productDetails, value, finalAmount, discount }}>
                            <p>Add to Card</p>
                        </Link> */}
                        <Link to={`/cart`} onClick={saveData} state={{ productDetails, value, finalAmount, discount }}>
                            <p>Add to Card</p>
                        </Link>
                    </div>
                </MDBCol>

            </MDBRow>
        </MDBContainer >

    </>);
}

export default ProductDetails;
