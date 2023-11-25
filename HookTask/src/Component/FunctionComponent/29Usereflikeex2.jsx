import { useClickAway } from "@uidotdev/usehooks";
import { useRef, useState } from "react";

const Usereflikeex2 = () => {
    const targetElement = useRef(null);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const alertClickAway = () => {
        setCount((c) => c + 1);
    }
    const alertClickAway1 = () => {
        setCount1((c) => c + 1);
    }

    useClickAway(targetElement, alertClickAway)
    return (<>
        <div className="gallery">
            <div className="col" ref={targetElement}>
                <img src="https://i.postimg.cc/G207QNV7/image.png" alt="Product 1" className="" />
                <p>iWatch Series 6</p>
                <div className="btns">
                    <button onClick={alertClickAway}>
                        <img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" />{count}
                    </button>
                    <button onClick={alertClickAway1}>
                        <img
                            src="https://api.iconify.design/icon-park:buy.svg?color=%23888888"
                            alt="add" />{count1}
                    </button>
                </div>
            </div>
        </div>

    </>);
}

export default Usereflikeex2;