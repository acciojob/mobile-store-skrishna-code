import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({
  products,
  addProduct,
  updateProduct,
  deleteProduct
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    addProduct({
      name: formData.name,
      description: formData.description,
      image: formData.image,
      price: Number(formData.price)
    });

    setFormData({
      name: "",
      description: "",
      image: "",
      price: ""
    });
  };

  const handleEdit = (product) => {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    updateProduct({
      id: editingId,
      name: formData.name,
      description: formData.description,
      image: formData.image,
      price: Number(formData.price)
    });

    setEditingId(null);

    setFormData({
      name: "",
      description: "",
      image: "",
      price: ""
    });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <form onSubmit={editingId ? handleSave : handleAdd}>
        <input
          className="form-control"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit">
          {editingId ? "Save" : "Add"}
        </button>
      </form>

      <hr />

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
            </h2>

            <p>${product.price}</p>

            <button
              className="float-right"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>

            <button
              className="float-right"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
