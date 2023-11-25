import { useCallback, useMemo } from "react";

const Usecallbacksortex2 = () => {
    const values = [3, 9, 6, 4, 2, 1]
    const memoizedValue = useMemo(() => values.sort(), [values])
    const memoizedFunction = useCallback(() => values.sort(), [values])
    return (<>
        {/* // This will always return the same value, a sorted array. Once the values array changes then this will recompute. */}
        Memo:{memoizedValue} <br />
        {/* // This will give me back a function that can be called later on. It will always return the same result unless the values array is modified. */}
        Callback:{memoizedFunction()}
    </>);
}

export default Usecallbacksortex2;