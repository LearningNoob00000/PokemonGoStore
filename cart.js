document.addEventListener("DOMContentLoaded", function() {
    // Clear existing content of cartContainer
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    // Retrieve cart items from local storage
    let cartItems = localStorage.getItem('CartItems');
    if (cartItems) {
        // Split the cart items string into an array
        cartItems = cartItems.split(';');

        // Get the container element to display cart items
        // const cartContainer = document.getElementById('cart-container');

        // Iterate through cart items array
        cartItems.forEach(item => {
            // Split each item string into name, price, and image
            const [name, price, image] = item.split(',');

            // Create elements to display item data
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart-item');

            const itemName = document.createElement('h3');
            itemName.textContent = name;
            itemName.style.fontSize = '16px'; // Increase text size

            const itemPrice = document.createElement('span');
            itemPrice.textContent = price;
            itemPrice.style.fontSize = '16px'; // Increase text size

            const itemImage = document.createElement('img');
            itemImage.src = image;
            itemImage.alt = name;
            
            // Add "Check Out" button
            const checkoutButton = document.createElement('div');
            checkoutButton.classList.add('checkout-button');
            const button = document.createElement('button');
            button.textContent = 'Check Out';
            button.addEventListener('click', function() {
                // Add functionality for checkout button if needed
                alert('Checkout clicked');
            });
            checkoutButton.appendChild(button);

            // Append item data elements to item container
            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemPrice);

            // Append item container to cart container
            cartContainer.appendChild(itemContainer);
            cartContainer.appendChild(checkoutButton);
        });
    } else {
        // If cart is empty, display a message
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartContainer.appendChild(emptyCartMessage);
    }
});
