const cart = [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');

// Toggle cart sidebar
cartToggle.addEventListener('click', () => {
    cartSidebar.classList.toggle('translate-x-full');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
});

// Add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        updateCart();
    });
});

// Update cart UI
function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    let count = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center';
        li.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsList.appendChild(li);
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = count;
}