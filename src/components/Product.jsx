import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  let param = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
  const interval=  fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((prod) => setProduct(prod));
      return ()=>{
         clearInterval(interval);
      }
  }, []);

  return (
    <div className="card mb-3 d-flex flex-row justify-content-between align-items-center">
      <img src={product.image} className="card-img-top w-50 h-50" alt={product.id} />
      <div className="card-body">
        <h5 className="card-title fs-1 fw-bold">{product.title}</h5>
        <p className="card-text fs-4 fw-bold">{product.category}</p>
        <p className="card-text fs-5">{product.description}</p>
        <p className="card-text fs-2">
          <small className="text-body-secondary">${product.price}</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
