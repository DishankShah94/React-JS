import { useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import { json } from "react-router-dom";

const Cookieex = () => {
    const [cookie, setCookie] = useCookies("cookiesExample")
    useEffect(() => {
        setCookie('item', JSON.stringify({ 'username': 'data' }));
    }, [])
    return (<>
        <h2 className="text-center">Cookie Example</h2>
    </>);
}

export default Cookieex;