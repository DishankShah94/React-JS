import { useState } from "react";

const ManyMoreDetails = () => {
    const [product, setProduct] = useState([]);


    return (<>
        {product.map((product, index) => (

            <>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                <p>{product.price}</p>
            </>
        ))}
    </>
    )
}

export default ManyMoreDetails;