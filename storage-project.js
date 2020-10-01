window.addEventListener("DOMContentLoaded", (event) => {
  const item = document.getElementById("items");
  const quantity = document.getElementById("quantity");
  const cart = document.getElementById("shopping-cart");
  const button = document.getElementById("add-to-cart");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    storeItem(item.value, quantity.value);
    const p = document.createElement("p");
    p.innerHTML = `${item.value} ${quantity.value} <button class="rmv" id="${item.value}">Remove</button>`;
    cart.appendChild(p);
  });

  const showCart = () => {
    Object.keys(localStorage).forEach((key) => {
      const p = document.createElement("p");
      p.innerHTML = `${key} ${JSON.parse(localStorage.getItem(key))} <button class="rmv" id="${key}">Remove</button>`;
      cart.appendChild(p);

      // console.log(key);
    });
  };
  showCart();
  const storeItem = (item, quantity) => {
    localStorage.setItem(item, JSON.stringify(quantity));
  };

  const removeItem = (item) => {
    localStorage.removeItem(item)
  };

  
  // when we click button - call removeItem with the button ID 
cart.addEventListener('click', event => {
  // event.target.className ---  gets class name
  // event.target.id --- gets id of button
  // button has class name of rmv
  // if our classname rmv then call removeItem with our buttons Id
  // check to make sure we are clicking a button
  // if statement to check if class is rmv - this means we are clicking a button
  // if we click a button then remove from local storage whatever the button id is.
  if (event.target.className == 'rmv'){
    removeItem(event.target.id)
    let par = event.target.parentElement;
    par.remove()

  }
})

});
