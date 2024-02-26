import { useEffect, useState } from "react";
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
// import { Link } from "react-router-dom";
// import '../Component/assests/chair.css'
const Chairs = () => {
    const [chair, setChair] = useState([]);
    const getChair = () => fetch("http://localhost:5000/ChairCategory")
        .then((response) => response.json())
        .then((data) => { setChair((currentData) => [...currentData, ...data]) })

    useEffect(() => {
        getChair();
    }, [])
    return (<>
        <MDBContainer>
            <MDBRow>
                {chair.map((chair, index) => (

                    <MDBCol md="12" lg="4" key={index}>
                        <Link to={"/ChairsDetails/" + chair.id}>
                            <MDBCard>
                                <MDBCardImage src={chair.image} position='top' alt='...' style={{ width: "400px", height: "300px" }} className="d-block mx-auto" />
                                <MDBCardBody>
                                    <MDBCardTitle>{chair.discription}</MDBCardTitle>
                                    <MDBCardText>
                                        {chair.price}
                                    </MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </Link>
                    </MDBCol>

                ))}
            </MDBRow>
        </MDBContainer>
    </>);
}

export default Chairs;