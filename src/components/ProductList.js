import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
            </h2>

            <img
              src={product.image}
              alt={product.name}
              width="150"
            />

            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
