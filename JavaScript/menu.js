//JS Coding for Functional Food Tabs//
document.addEventListener('DOMContentLoaded', function() {
    // Functional Food Tabs
    let list = document.querySelectorAll(".list li");
    let boxes = document.querySelectorAll(".box");

    list.forEach((el) => {
        el.addEventListener("click", (e) => {
            list.forEach((el1) => {
                el1.style.color = "whitesmoke";
            });
            e.target.style.color = "#f2c641";

            boxes.forEach((el2) => {
                el2.style.display = "none";
            });
            document.querySelectorAll(e.target.dataset.filter).forEach((li) => {
                li.style.display = "flex";
            });
        });
    });

    // Add To Shopping Cart Coding
    const plusIcons = document.querySelectorAll('.fa-plus');
    const cartSidebar = document.getElementById('sidebar');
    const cartCloseButton = document.querySelector('.sidebar-close');
    const cartToggleButton = document.getElementById('cart-icon');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    let totalPrice = 0;

    function addItemToCart(itemName, itemPrice) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${itemName}</span>
            <span class="cart-item-price">$${itemPrice.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += itemPrice;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    plusIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const parentBox = icon.closest('.box');
            const itemName = parentBox.querySelector('h3').textContent;
            const itemPrice = parseFloat(parentBox.querySelector('section').textContent.slice(1));
            addItemToCart(itemName, itemPrice);
        });
    });

    // Function to open the cart sidebar
    function openCart() {
        cartSidebar.classList.add('open');
    }

    // Function to close the cart sidebar
    function closeCart() {
        cartSidebar.classList.remove('open');
    }

    // Event listener for clicking the "Order Now" button
    document.querySelector('.button').addEventListener('click', function() {
        openCart(); // Ensure the sidebar opens when the button is clicked
    });

    // Event listener for cart toggle button (shopping cart icon)
    cartToggleButton.addEventListener('click', () => {
        cartSidebar.classList.toggle('open');
    });

    // Event listener for cart close button
    cartCloseButton.addEventListener('click', () => {
        closeCart();
    });
});