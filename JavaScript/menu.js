//JS Coding for Functional Food Tabs//


let list = document.querySelectorAll(".list li");
let boxes = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click", (e)=>{

        list.forEach((el1)=>{
            el1.style.color = "whitesmoke";
        })
        e.target.style.color = "#f2c641";

        boxes.forEach((el2)=> {
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
            li.style.display = "flex";
        })
    })
})

//Add To Shopping Cart Coding//

// Select all the plus icons
const plusIcons = document.querySelectorAll('.fa-plus');

// Select the cart sidebar
const cartSidebar = document.getElementById('sidebar');

// Select the cart close button
const cartCloseButton = document.querySelector('.sidebar-close');

// Select the cart toggle button
const cartToggleButton = document.querySelector('.cart-toggle');

// Select the cart items container
const cartItemsContainer = document.querySelector('.cart-items');

// Select the cart total element
const cartTotal = document.querySelector('.cart-total');

// Initialize total price
let totalPrice = 0;

// Function to add item to cart
function addItemToCart(itemName, itemPrice) {
    // Create a new div element for the cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    // Set the inner HTML of the cart item
    cartItem.innerHTML = `
        <span>${itemName}</span>
        <span class="cart-item-price">$${itemPrice.toFixed(2)}</span>
    `;
    
    // Append the cart item to the cart items container
    cartItemsContainer.appendChild(cartItem);
    
    // Update total price
    totalPrice += itemPrice;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

// Event listener for plus icons
plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Get the parent box of the clicked plus icon
        const parentBox = icon.closest('.box');
        
        // Extract item name and price from the parent box
        const itemName = parentBox.querySelector('h3').textContent;
        const itemPrice = parseFloat(parentBox.querySelector('section').textContent.slice(1));
        
        // Add the item to the cart
        addItemToCart(itemName, itemPrice);
    });
});

// Event listener for cart close button
cartCloseButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Event listener for cart toggle button
cartToggleButton.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});
