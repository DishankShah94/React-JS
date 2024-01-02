import {useDispatch, useSelector} from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";
const Cart = () => {
const state = useSelector((state)=>state);
const dispatch = useDispatch();
return ( <>
        <div className="cart">
            <h2>Number of items in cart: {state.numOfItems}</h2>
            <button onClick={()=>{dispatch(addItem());}} className="green">Add item in cart</button>
            <button disabled={state.numOfItems>0 ? false:true} onClick={()=>{dispatch(deleteItem());}} className="red">Remove Item in cart</button>            
        </div>
    </> );
}
 
export default Cart;