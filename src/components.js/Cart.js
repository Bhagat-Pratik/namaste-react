import { useSelector } from "react-redux"
import ItemList from "./ItemList"

const Cart=()=>{
    const cartItems=useSelector((store)=>(store.cart.items))
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
                <div classname="w-6/12 m-auto" >
                    <button classname="p-2 m-2 bg-black text-white rounded-lg "></button>
                    <ItemList items={cartItems} />
                </div> 
            </div>
    )
}
export default Cart