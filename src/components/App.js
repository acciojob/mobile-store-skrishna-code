import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

function App() {
  const initialProducts = [
    {
      id: 1,
      name: "iPhone 13",
      price: 699,
      description: "Apple iPhone 13 with A15 Bionic chip.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 599,
      description: "Samsung Galaxy S21 with powerful performance.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "OnePlus 9",
      price: 499,
      description: "OnePlus 9 with fast charging and smooth display.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Google Pixel 6",
      price: 599,
      description: "Google Pixel 6 with an excellent camera.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      price: 449,
      description: "Xiaomi Mi 11 with high performance.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Vivo X60",
      price: 399,
      description: "Vivo X60 with a beautiful AMOLED display.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Oppo Find X3",
      price: 499,
      description: "Oppo Find X3 with advanced camera features.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Realme GT",
      price: 349,
      description: "Realme GT with powerful performance.",
      image: "https://via.placeholder.com/200"
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now()
    };

    setProducts((prevProducts) => [
      ...prevProducts,
      newProduct
    ]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} />}
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails
              products={products}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminPanel
              products={products}
              addProduct={addProduct}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
