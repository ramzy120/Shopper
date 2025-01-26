// Fetch products from the mock API
fetch("http://localhost:5000/products")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    // Loop through the products and create HTML for each
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="150" height="150">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
      `;
      productList.appendChild(productDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
