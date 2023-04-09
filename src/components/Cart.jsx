import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, remove_from_cart } from "../redux/action/Actions";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return state.length ? (
    <div className="my-5 container">
      {state.map((x) => (
        <div className="card mb-3 shadow-lg" key={x.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={x.image}
                className="img-fluid rounded-start"
                alt={x.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">{x.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    price: {x.qty} x ${x.price} = ${x.qty * x.price}
                  </small>
                </p>
                <button
                  className="btn btn-outline-dark me-2"
                  onClick={() => dispatch(add_to_cart(x))}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => dispatch(remove_from_cart(x))}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="text-center my-5">NO ITEM IN CART</h1>
  );
};

export default Cart;
