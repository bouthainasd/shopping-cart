
    function increaseQuantity(button) {
      const quantityElement = button.parentElement.querySelector('.quantity');
      const currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;

      updateTotalPrice();
    }

    function decreaseQuantity(button) {
      const quantityElement = button.parentElement.querySelector('.quantity');
      const currentQuantity = parseInt(quantityElement.textContent);

      if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
        updateTotalPrice();
      }
    }

    function toggleLike(likeButton) {
      likeButton.classList.toggle('liked');
    }

    function deleteItem(deleteButton) {
      const cartItem = deleteButton.closest('.cart-item');
      cartItem.remove();
      updateTotalPrice();
    }

    function updateTotalPrice() {
      const cartItems = document.querySelectorAll('.cart-item');
      let totalPrice = 0;

      cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.dataset.price);
        totalPrice += quantity * price;
      });

      document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }
  