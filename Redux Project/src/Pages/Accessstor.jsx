import { useSelector } from "react-redux";

const Accessstore = () => {
    const products = useSelector((state) => state);
    return (<>
        <div className="container">
            <div className="row">
                <div className="col">
                    {JSON.stringify(products)}
                </div>
            </div>
        </div>
    </>);
}

export default Accessstore;