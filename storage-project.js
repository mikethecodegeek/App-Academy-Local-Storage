window.addEventListener("DOMContentLoaded", (event) => {
  const item = document.getElementById("items");
  const quantity = document.getElementById("quantity");
  const cart = document.getElementById("shopping-cart");
  const button = document.getElementById("add-to-cart");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    storeItem(item.value, quantity.value);
    const p = document.createElement("p");
    p.innerHTML = `${item.value} ${quantity.value} `;
    cart.appendChild(p);
  });

  const showCart = () => {
    Object.keys(localStorage).forEach((key) => {
      const p = document.createElement("p");
      p.innerHTML = `${key} ${JSON.parse(localStorage.getItem(key))} `;
      cart.appendChild(p);

      // console.log(key);
    });
  };
  showCart();
  const storeItem = (item, quantity) => {
    localStorage.setItem(item, JSON.stringify(quantity));
  };
  const removeItem = () => {};
});
