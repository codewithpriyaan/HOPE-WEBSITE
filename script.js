document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    if (window.location.pathname.endsWith("order.html")) {
        const products = [
            {
                name: "Classic Sneakers",
                description: "Comfortable and stylish sneakers.",
                price: "$50",
                images: ["images/shoe1_large.jpg", "images/shoe1_thumb1.jpg", "images/shoe1_thumb2.jpg"],
                details: ["Canvas upper", "Rubber sole", "Lace-up", "Multiple colors"],
                sizes: ["7", "8", "9", "10", "11"]
            },
            {
                name: "Leather Boots",
                description: "Durable leather boots.",
                price: "$120",
                images: ["images/shoe2_large.jpg", "images/shoe2_thumb1.jpg", "images/shoe2_thumb2.jpg"],
                details: ["Full-grain leather", "Waterproof", "Lug outsole"],
                sizes: ["7", "8", "9", "10", "11"]
            },
                        {
                name: "Running Shoes",
                description: "Lightweight and breathable running shoes for optimal performance.",
                price: "$75",
                images: ["images/shoe3_large.jpg", "images/shoe3_thumb1.jpg", "images/shoe3_thumb2.jpg"],
                details: ["Mesh upper", "Responsive cushioning", "Flexible outsole", "Breathable lining"],
                sizes: ["7", "8", "9", "10", "11"]
            },
             {
                name: "Formal Shoes",
                description: "Elegant and sophisticated formal shoes for special occasions.",
                price: "$100",
                images: ["images/shoe4_large.jpg", "images/shoe4_thumb1.jpg", "images/shoe4_thumb2.jpg"],
                details: ["Calfskin leather", "Leather sole", "Blake stitched construction", "Polished finish"]
            }
        ];

        const productContainer = document.getElementById('product-container');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-details');

            let thumbnailsHTML = "";
            product.images.slice(1).forEach(thumb => {
                thumbnailsHTML += `<img src="${thumb}" alt="Thumbnail" class="thumbnail">`;
            });

            let detailsHTML = "<ul>";
            product.details.forEach(detail => detailsHTML += `<li>${detail}</li>`);
            detailsHTML += "</ul>";

            let sizesHTML = "<select><option value=''>Select Size</option>";
            product.sizes.forEach(size => sizesHTML += `<option value="${size}">${size}</option>`);
            sizesHTML += "</select>";

            productDiv.innerHTML = `
                <div class="image-gallery">
                    <img src="${product.images[0]}" alt="${product.name}" class="main-image">
                    <div class="thumbnails">
                        ${thumbnailsHTML}
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <h4>Details</h4>
                    ${detailsHTML}
                    <div class="size-selection">
                        <label for="size">Size:</label>
                        ${sizesHTML}
                    </div>
                    <button>Add to Cart</button>
                </div>
            `;
            productContainer.appendChild(productDiv);

            productDiv.querySelectorAll('.thumbnail').forEach(thumbnail => {
                thumbnail.addEventListener('click', () => {
                    productDiv.querySelector('.main-image').src = thumbnail.src;
                });
            });
        });
    }
});