import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { add_to_cart } from "../../redux/action/Actions";
import { useDispatch } from "react-redux";

const Products = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  const getAllproducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const getAllCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((cat) => setCategories(cat));
  };
  const getProductsInCategories = (category) => {
    fetch(`${api_url}/category/${category}`)
      .then((res) => res.json())
      .then((prod) => setData(prod));
  };

  useEffect(() => {
    getAllproducts();
    getAllCategories();
    return () => {
      clearInterval(getAllproducts, getAllCategories);
    };
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-center my-5 flex-wrap gap-3">
          <button
            onClick={() => getAllproducts()}
            className="btn btn-outline-dark ms-2"
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                onClick={() => getProductsInCategories(cat)}
                className="btn btn-outline-dark ms-2"
                key={cat}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-md-4 d-flex g-3" key={item.id}>
                <div className="card shadow-lg">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ width: "100%", height: "40%" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-content-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price: ${item.price}</p>
                  </div>
                  <div className="d-flex justify-content-between p-4">
                    <Link
                      to={`/product/${item.id}`}
                      className="btn btn-outline-dark"
                    >
                      Go Details
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-outline-dark"
                      onClick={() => dispatch(add_to_cart(item))}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
