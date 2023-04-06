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
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt={product.id} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <small className="text-body-secondary">${product.price}</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
