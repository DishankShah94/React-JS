import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomHookAddProduct from "../Component/Hooks/CustomHookAddProduct";

const AddProduct = () => {
    const [state, setState] = useState({ formData: "" });
    const navigate = useNavigate();
    const { handleChange, inp, error } = CustomHookAddProduct({
        image: '',
        price: "",
        description: ""
    });

    // let savedata = () => {
    //     fetch("http://localhost:5000/allProducts", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",  // sent request
    //             "Accept": "application/json",   // expected data sent back
    //         },
    //         body: JSON.stringify(inp)
    //     }).then((res) => { console.log(res); return res.json() }).then((response) => {
    //         console.log(response);
    //         navigate("/admin/allusers");
    //     })
    // }
    let savedata = () => {
        // Construct the desired image path
        const imagePath = `./assets/images/` + inp.image;
        // Update the inp object with the constructed image path
        const updatedInp = {
            ...inp,
            image: imagePath,
        };

        fetch("http://localhost:5000/allProducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(updatedInp),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                navigate("/admin/allusers");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <div className="card">
                        <div className="card-header text-center">Signup</div>
                        <div className="card-body">

                            <form>
                                {JSON.stringify(inp)}
                                <div className="row">
                                    <div className="col">
                                        {/* <input type="file" placeholder='Image' className='form-control' name="image" onChange={handleChange} onBlur={handleChange} required /> */}
                                        <input type="file" placeholder='Image' className='form-control' value={inp.image} name="image" onChange={handleChange} onBlur={handleChange} required />
                                        {error && error.imageError ? <span>This field is Required</span> : <></>}

                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input className='form-control' placeholder='Enter Price' onChange={handleChange} onBlur={handleChange} type="text" name="price" required />
                                        {error && error.priceError ? <span>This field is Required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input className='form-control' placeholder='Enter Description' onChange={handleChange} onBlur={handleChange} type="text" name="description" required />
                                        {error && error.descriptionError ? <span>This field is Required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <input type="button" value="register" onClick={savedata} className='btn btn-info' /> &nbsp;
                                        <input type="reset" className='btn btn-warning' />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default AddProduct;
