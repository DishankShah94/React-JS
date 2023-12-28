import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import '../Component/assests/chair.css'
const Chairs = () => {

    return (<>
        <section >
            <MDBContainer className="chair_sec_1">
                <MDBRow className="d-flex align-items-center justify-content-center">
                    <MDBCol>
                        <div class="chairs">
                            <h2>Chairs</h2>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>

    </>);
}

export default Chairs;