import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Action";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (<>

    </>);
}

export default Home;