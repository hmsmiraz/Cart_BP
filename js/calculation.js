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
  