import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, remove_from_cart } from "../redux/action/Actions";


const Cart = () => {
  const state = useSelector((state) => state);


  const dispatch = useDispatch();
  const itemsPrice = (items) => {
    return items.reduce((a, c) => a + c.price * c.qty, 0);
  };
  return state.length ? (
    <div className="my-5 container row">
      <div className="col col-m-6 flex-grow-1">
        {state.map((x) => (
          <div className="card mb-3 shadow-lg w-100" key={x.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={x.image}
                  className="img-fluid rounded-start"
                  alt={x.title}
                  style={{
                    maxHeight: "100px",
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>

                  <p className="card-text">
                    <small className="text-body-secondary">
                      price: {x.qty} x ${x.price} = $
                      {(x.qty * x.price).toFixed(2)}
                    </small>
                  </p>
                  <button
                    className="btn btn-outline-dark me-2"
                    onClick={() => dispatch(add_to_cart(x))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-danger"
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
      <div className="col  col-m-6 text-center shadow-lg position-sticky ">
        <h2 className=" mb-5 ">cart summary</h2>
        <p className="fs-2">items price: ${itemsPrice(state).toFixed(2)}</p>
        <p className="fs-2">
          taxes price: ${(itemsPrice(state) * 0.14).toFixed(2)}
        </p>
        <p className="fs-2">
          shiping price: ${(itemsPrice(state) > 2000 ? 20 : 50).toFixed(2)}
        </p>
        <strong className="fs-2">
          total price: $
          {(
            itemsPrice(state) +
            itemsPrice(state) * 0.14 +
            (itemsPrice(state) > 2000 ? 20 : 50)
          ).toFixed(2)}
        </strong>
      </div>
    </div>
  ) : (
    <h1 className="text-center my-5">NO ITEM IN CART</h1>
  );
};

export default Cart;
