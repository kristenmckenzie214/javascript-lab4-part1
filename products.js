"use strict";

const products = [
  { name: "Milk", category: "Dairy", price: 1.99, inStock: true },
  { name: "Banana", category: "Produce", price: 0.49, inStock: true },
  { name: "Cheese", category: "Dairy", price: 4.99, inStock: false },
  { name: "Bread", category: "Bakery", price: 2.99, inStock: true },
  { name: "Apple", category: "Produce", price: 0.89, inStock: false },
];

function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card", "mb-3");

    productCard.innerHTML = `
    <div class="card-body">
     <h5 class="card-title">${product.name}</h5>
     <p class="card-text">
      <strong>Category:</strong>${product.category}<br>
      <strong>Price:</strong>$${product.price.toFixed(2)}<br>
      <strong>In Stock:</strong>
      <span class="${product.inStock ? "text-success" : "text-danger"}">
        ${product.inStock ? "Yes" : "No"}
      </span>
     </p>
    </div>`;

    container.appendChild(productCard)
  });
}

document.addEventListener("DOMContentLoaded", () => renderProducts(products))
