import React from "react";
import {
  Link,
  useParams
} from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        width="250"
      />

      <p>{product.description}</p>

      <p>Price: ${product.price}</p>

      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
}

export default ProductDetails;
