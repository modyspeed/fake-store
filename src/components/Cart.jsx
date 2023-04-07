
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AddToCart,DelFromCart } from "../redux/action/Actions"
const Cart = () => {
  const state=useSelector(state=>state.CartReducer)
  const dispatch =useDispatch()
  return (
    <div className="container">

      {state.length?state.map(x=>(
        <div className="row">
      <div className="card mb-3 d-flex flex-row justify-content-between align-items-center">
      <img src={x.image} className="card-img-top w-50 h-50" alt={x.id} />
      <div className="card-body">
        <h5 className="card-title fs-1 fw-bold">{x.title}</h5>
        <p className="card-text fs-4 fw-bold">{x.category}</p>
        <p className="card-text fs-5">{x.description}</p>
        <p className="card-text fs-2">
          <small className="text-body-secondary">{x.quantity} x {x.price} = {x.quantity * x.price}$</small>
        </p>
        <div className="d-flex w-75 m-auto">
          <button className="btn btn-outline-secondary btn-sm" onClick={()=>dispatch(AddToCart(x))}>+</button>
          <input type="text" value={x.quantity} className="text-center shadow-none"/>
          <button className="btn btn-outline-secondary btn-sm" onClick={()=>dispatch(DelFromCart(x))}>-</button>
        </div>
      </div>
    </div>
        </div>
      )):<h1 className="text-center my-5">No Item In Cart</h1>}
    </div>
  )
}

export default Cart