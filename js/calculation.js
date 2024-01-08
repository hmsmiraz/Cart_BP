document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".fa-cart-shopping");
  const sidebar = document.querySelector(".sidebar");
  const closeSidebarButton = document.getElementById("closeSidebar");

  cartButton.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });

  closeSidebarButton.addEventListener("click", function () {
    sidebar.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addToOrderButtons = document.querySelectorAll(".add-to-order");
  const sidebar = document.querySelector(".sidebar");
  const closeSidebarButton = document.getElementById("closeSidebar");
  const cartItemsContainer = document.getElementById("cartItems");
  const totalItemsElement = document.getElementById("totalItems");
  const totalPriceElement = document.getElementById("totalPrice");
  const cartBadge = document.querySelector(".bg-red-500");
  let totalItems = 0;
  let totalPrice = 0;

  function updateCartBadge() {
    cartBadge.textContent = totalItems; 
  }

  addToOrderButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const parentCard = event.target.closest(".bg-white");
      const itemName = parentCard.querySelector("h3").innerText;
      const itemPrice = parseFloat(
        parentCard.querySelector(".text-gray-600").innerText.slice(1)
      );
      let quantity = 1;
      const itemImageSrc = parentCard.querySelector("img").getAttribute("src");
      const newItem = document.createElement("div");
      newItem.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "mb-2",
        "text-black",
        "mt-10"
      );

      newItem.innerHTML = `
      <img src="${itemImageSrc}" alt="${itemName}" class="w-16 h-16 object-cover rounded">
      <div class="flex items-center ml-4">
        <div>
          <span>${itemName}</span>
          <div class="flex items-center">
            <button class="increase-quantity px-2">+</button>
            <span class="mx-2">${quantity}</span>
            <button class="decrease-quantity px-2">-</button>
            <span class="mx-2">$${itemPrice.toFixed(2)}</span>
            <button class="delete-item px-2"><i class="fa-solid fa-trash text-white"></i></button>
          </div>
        </div>
      </div>
    `;

      cartItemsContainer.appendChild(newItem);
      totalItems++;
      totalPrice +=itemPrice;
      totalItemsElement.textContent = totalItems;
      totalPriceElement.textContent = totalPrice.toFixed(2);
      updateCartBadge();

      const increaseButton = newItem.querySelector(".increase-quantity");
      const decreaseButton = newItem.querySelector(".decrease-quantity");
      const deleteButton = newItem.querySelector(".delete-item");
      const quantityDisplay = newItem.querySelector(".mx-2");

      increaseButton.addEventListener("click", function () {
        quantity++;
        quantityDisplay.textContent = quantity;
        totalPrice += itemPrice;
        totalPriceElement.textContent = totalPrice.toFixed(2);
        updateCartBadge();
      });

      decreaseButton.addEventListener("click", function () {
        if (quantity > 1) {
          quantity--;
          quantityDisplay.textContent = quantity;
          totalPrice -= itemPrice;
          totalPriceElement.textContent = totalPrice.toFixed(2);
          updateCartBadge();
        }
      });

      deleteButton.addEventListener("click", function () {
        totalItems--;
        totalItemsElement.textContent = totalItems;
        totalPrice -= itemPrice * quantity; 
        totalPriceElement.textContent = totalPrice.toFixed(2);
        newItem.remove();
        updateCartBadge(); 
      });
    });
  });
});
