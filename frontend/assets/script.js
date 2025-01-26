// Mock API Endpoint
const API_URL = 'https://fakestoreapi.com/products'; // Use any mock API of your choice

// Function to Fetch Products
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        populateCarousel(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to Populate Carousel with Products
function populateCarousel(products) {
    const carousel = document.getElementById('product-carousel');

    // Loop through each product and create product cards
    products.forEach((product) => {
        const productCard = `
            <div class="product text-center">
                <figure class="product-media">
                    <a href="product.html">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                    </a>
                </figure>
                <div class="product-body">
                    <div class="product-cat">
                        <a href="#">${product.category}</a>
                    </div>
                    <h3 class="product-title"><a href="product.html">${product.title}</a></h3>
                    <div class="product-price">
                        ₦${product.price.toFixed(2)}
                    </div>
                    <div class="ratings-container">
                        <div class="ratings">
                            <div class="ratings-val" style="width: ${Math.random() * 100}%;"></div>
                        </div>
                        <span class="ratings-text">( ${Math.floor(Math.random() * 50 + 1)} Reviews )</span>
                    </div>
                </div>
            </div>
        `;

        // Append the product card to the carousel
        carousel.innerHTML += productCard;
    });

    // Initialize the Owl Carousel (if not already initialized)
    $('[data-toggle="owl"]').owlCarousel(); // Assumes jQuery and Owl Carousel are included
}

// Fetch and Display Products on Page Load
fetchProducts();

$(document).ready(function () {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Example: Show contact button functionality
    $(".btn-primary").on("click", function () {
        alert("Contact details are displayed here!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Example: Toggle contact information
    const showContactBtn = document.querySelector(".btn-primary");
    const contactCard = document.querySelector(".contact-card");
    let contactShown = false;

    if (showContactBtn) {
        showContactBtn.addEventListener("click", function () {
            if (!contactShown) {
                showContactBtn.textContent = "Hide Contact";
                const contactInfo = document.createElement("p");
                contactInfo.textContent = "Contact: +234-123-456-7890";
                contactInfo.style.color = "#ffffff";
                contactInfo.id = "contact-info";
                contactCard.appendChild(contactInfo);
                contactShown = true;
            } else {
                showContactBtn.textContent = "Show Contact";
                const contactInfo = document.getElementById("contact-info");
                if (contactInfo) {
                    contactCard.removeChild(contactInfo);
                }
                contactShown = false;
            }
        });
    }

    // Example: Size selection feedback
    const sizeDropdown = document.getElementById("size");
    if (sizeDropdown) {
        sizeDropdown.addEventListener("change", function () {
            const selectedSize = sizeDropdown.value;
            if (selectedSize !== "#") {
                alert(`You selected size: ${selectedSize}`);
            }
        });
    }

    // Example: Interactive Ratings
    const ratingsLink = document.getElementById("review-link");
    if (ratingsLink) {
        ratingsLink.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Redirecting to reviews section...");
        });
    }
});

const productPriceElement = document.querySelector(".product-price");
if (productPriceElement) {
    const originalPrice = 84; // Original price in ₦
    const discount = 0.1; // 10% discount
    const discountedPrice = originalPrice - originalPrice * discount;

    productPriceElement.textContent = `₦${discountedPrice.toFixed(2)} (10% off!)`;
}
document.querySelectorAll(".social-icon").forEach(function (icon) {
    icon.addEventListener("click", function (e) {
        e.preventDefault();
        const platform = this.title.toLowerCase();
        const productTitle = document.querySelector(".product-title").textContent;
        const shareURL = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(`Check out this product: ${productTitle}`);
        let url;

        switch (platform) {
            case "facebook":
                url = `https://www.facebook.com/sharer/sharer.php?u=${shareURL}`;
                break;
            case "twitter":
                url = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareURL}`;
                break;
            case "pinterest":
                url = `https://pinterest.com/pin/create/button/?url=${shareURL}&description=${shareText}`;
                break;
            case "instagram":
                alert("Instagram sharing is not supported via direct links.");
                return;
            default:
                return;
        }

        window.open(url, "_blank");
    });
});

