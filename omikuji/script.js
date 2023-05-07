const div = document.querySelector("#div");
const button = document.querySelector("button");
const array = ["DAIKICHI", "KICHI", "SHOKICHI", "HANKICHI", "SUEKICHI", "SUESHOKICHI", "KYO"];
let id = 0;

function hiku() {
  const random = Math.floor(Math.random() * 7);
  div.innerHTML = array[random];
}

button.addEventListener("click", () => {
  if (id === 0) {
    id = setInterval(hiku, 10);
    button.innerHTML = "STOP";
  } else {
    clearInterval(id);
    id = 0;
    button.innerHTML = "START";
  }
});