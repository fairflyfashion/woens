let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cart-items");
let totalDiv = document.getElementById("total");

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Cart is empty</p>";
    totalDiv.innerHTML = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
            <div class="product-box">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

                <button onclick="decreaseQty(${index})">−</button>
                <span> ${item.qty} </span>
                <button onclick="increaseQty(${index})">+</button>

                <br><br>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
  });

  totalDiv.innerHTML = "Total: ₹" + total;
}

function increaseQty(index) {
  cart[index].qty++;
  saveCart();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  }
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
