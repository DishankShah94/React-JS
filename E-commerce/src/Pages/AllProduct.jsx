import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
    MDBCol, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRow,
    MDBContainer
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const AllProduct = () => {
    const [product, setProduct] = useState([]);

    const getAllProduct = () => fetch("http://localhost:5000/allProducts")
        .then((response) => response.json())
        .then((data) => { setProduct((currentData) => [...currentData, ...data]) })

    useEffect(() => {
        getAllProduct();
    }, [])
    return (<>
        <MDBContainer>
            <MDBRow>
                {product.map((product, index) => (

                    <MDBCol md="4" key={index}>
                        <Link to={"/productsdetails/" + product.id}>
                            <MDBCard>
                                <MDBCardImage src={product.image} position='top' alt='...' style={{ width: "400px", height: "300px" }} />
                                <MDBCardBody>
                                    <MDBCardTitle>{product.discription}</MDBCardTitle>
                                    <MDBCardText>
                                        {product.price}
                                    </MDBCardText>
                                    {/* <MDBBtn href='#'>Many nore</MDBBtn> */}
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
                    </MDBCol>

                ))}
            </MDBRow>
        </MDBContainer>
    </>);
}

export default AllProduct;