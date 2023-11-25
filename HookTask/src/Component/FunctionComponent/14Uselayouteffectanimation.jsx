import { useLayoutEffect, useRef } from "react";

const Uselayouteffectanimation = () => {
    const elementRef = useRef(null);
    useLayoutEffect(() => {
        const element = elementRef.current;
        // Animate the element's opacity on mount
        element.style.color = "red";
        setTimeout(() => {
            element.style.color = "green";

        }, 1000);
        return () => {
            element.style.opacity = "blue";
            console.log("blue");
        }
    })
    return (<>
        <div ref={elementRef}>Animate me!</div>
    </>);
}

export default Uselayouteffectanimation;