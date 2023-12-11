import { useCallback, useEffect, useState } from "react";
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
//     MDBBtn
// } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ProductDetails from "./ProductDetails";
// import ProductDetails from "./ProductDetails";

const ProductApi = () => {
    const [product, setProduct] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState(null);
    // const [product2, setProduct2] = useState([]);
    // const [startingProductId, setStartingProductId] = useState(3);
    const [loadall, setLoadAll] = useState(false);
    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products").then(response => response.json())
    //         .then((data) => setProduct(data[0].product));
    //     console.log(data);
    // }, []);
    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products`
        );
        const nextData = await response.json();
        setProduct((currentData) => [...currentData, ...nextData])
    }, [])
    const manymore = async () => {
        // console.log("called");
        // const response2 = await fetch(
        //     `https://fakestoreapi.com/products?id_gte=${startingProductId}`
        // );
        setLoadAll(!loadall);
        // const nextData2 = await response2.json();
        // setProduct2((currentData2) => [...currentData2, ...nextData2])
        // setStartingProductId(startingProductId + nextData2.length);
        // if (nextData2.length >= 4) {
        //     for (let index = 3; index < nextData2.length; index++) {

        //         console.log("Product at index 3:", nextData2[index].id);

        //     }
        // }
    }
    // const manymore = useCallback(async () => {

    // // }, [startingProductId])
    // useEffect(() => {
    //     manymore();
    // }, [manymore]);

    useEffect(() => {
        fetchData();
    }, [fetchData])
    return (<>
        <div className="container">
            <MDBRow>
                {loadall ? <>{product.map((product, index) => (
                    (
                        <MDBCol md='4' className="mt-2" key={index}>
                            <Link to={"/productsdetails/" + product.id}>

                                {/* <Link to={{ pathname: "/productsdetails/" + product.id, state: { productDetails: product } }}> */}
                                <div class="card">
                                    <img src={product.image} alt={product.title} style={{ aspectRatio: '1/1', objectFit: 'contain' }} class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
                                        <Link to="/manymore">More Details</Link>
                                        {product.price}
                                    </div>
                                </div>
                            </Link>
                        </MDBCol>
                    )
                ))}</> : <>
                    {product.map((product, index) => (
                        index < 3 && (
                            <MDBCol md='4' key={index}>

                                <Link to={"/productsdetails/" + product.id}>
                                    <div class="card">
                                        <img src={product.image} alt={product.title} style={{ aspectRatio: '1/1', objectFit: 'contain' }} class="card-img-top" />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
                                            {/* <ProductDetails imgsrc={product.image} /> */}
                                            <Link to="/manymore">More Details</Link>
                                            {product.price}
                                        </div>
                                    </div>
                                </Link>
                            </MDBCol>
                        )
                    ))}
                </>}

            </MDBRow>

            <MDBRow className="my-3">
                <MDBCol>
                    <button onClick={manymore} className="btn btn-primary d-block mx-auto">Many More</button>

                </MDBCol>
                {selectedProduct && <ProductDetails productId={selectedProduct.id} />}
            </MDBRow>
        </div>
    </>);
}

export default ProductApi;