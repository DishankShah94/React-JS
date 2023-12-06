import { useCallback, useEffect, useState } from "react";

const ProductApi = () => {
    const [product, setProduct] = useState([]);
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
    })
    const data = () => {
        console.log("called");
    }
    useEffect(() => {
        fetchData();
    }, [fetchData])
    return (<>
        <div>
            {product.map((product, index) => (
                index < 3 && (
                    <div key={index}>
                        <h2>{product.id}</h2>
                        {product.id < 3 ? (
                            <>
                                <h3>{product.title}</h3>
                                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                                <p>{product.price}</p>
                            </>
                        ) : (
                            <button onClick={data}>Many More</button>
                        )}
                    </div>
                )
            ))}
        </div>
    </>);
}

export default ProductApi;