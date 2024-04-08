const main_div = document.getElementById("main_div");
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

main_div.addEventListener("click", listener, true);

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true);

button.addEventListener("click", listener, true);

function listener(event) {
  console.log(this.tagName);
}
