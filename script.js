// Price per item
const ITEM_PRICE = 15;

// Variables to track cart state
let totalItems = 0;
let totalPrice = 0;

// Add item to cart
function addToCart(itemId) {
    totalItems++;
    totalPrice = totalItems * ITEM_PRICE;
    updateCart();
    alert("Item added to cart!");
}

// Increase item count manually
function increaseItem() {
    totalItems++;
    totalPrice = totalItems * ITEM_PRICE;
    updateCart();
}

// Decrease item count manually
function decreaseItem() {
    if (totalItems > 0) {
        totalItems--;
        totalPrice = totalItems * ITEM_PRICE;
        updateCart();
    } else {
        alert("Cart is already empty!");
    }
}

// Update cart display
function updateCart() {
    document.getElementById("cart-items").textContent = `Items: ${totalItems}`;
    document.getElementById("cart-total").textContent = `Total: $${totalPrice}`;
}
