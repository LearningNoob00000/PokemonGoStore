document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById('cart-container');
    const playerEmail = localStorage.getItem("CurrentLogin");
    cartContainer.innerHTML = '';

    let cartItems = localStorage.getItem(`${playerEmail}CartItems`);
    if (cartItems) {
        cartItems = cartItems.split(';');

        cartItems.forEach(item => {
            const [name, price, image] = item.split(',');

            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart-item');

            const itemName = document.createElement('h3');
            itemName.textContent = name;
            itemName.style.fontSize = '16px';

            const itemPrice = document.createElement('span');
            itemPrice.textContent = price;
            itemPrice.style.fontSize = '16px';

            const itemImage = document.createElement('img');
            itemImage.src = image;
            itemImage.alt = name;

            const checkoutButton = document.createElement('div');
            checkoutButton.classList.add('checkout-button');
            const button = document.createElement('button');
            button.textContent = 'Check Out';
            button.addEventListener('click', function() {
                const currentDate = new Date();
                const dateTime = currentDate.toLocaleString(); // Get date and time
                const transactionData = {
                    dateTime: dateTime,
                    name: name,
                    price: price
                };

                let transactions = localStorage.getItem(`${playerEmail}transactionData`) ? localStorage.getItem(`${playerEmail}transactionData`).split(';') : [];
                transactions.push(`${transactionData.dateTime},${transactionData.name},${transactionData.price}`); // Save date, time, name, and price
                localStorage.setItem(`${playerEmail}transactionData`, transactions.join(';'));

                let updatedCartItems = localStorage.getItem(`${playerEmail}CartItems`).split(';');
                const itemIndex = updatedCartItems.findIndex(item => item === `${name},${price},${image}`);
                updatedCartItems.splice(itemIndex, 1);
                localStorage.setItem(`${playerEmail}CartItems`, updatedCartItems.join(';'));

                location.reload(); // Reload the page to reflect changes

                alert('Checkout clicked');
            });

            checkoutButton.appendChild(button);

            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemPrice);

            cartContainer.appendChild(itemContainer);
            cartContainer.appendChild(checkoutButton);
        });
    } else {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartContainer.appendChild(emptyCartMessage);
    }
});
