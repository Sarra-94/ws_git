//1step: test if they are linked
// console.log("test");
// --------------------------
// 2step : import variables
let btnPlus = document.querySelectorAll(".btn-plus");
let qtes = Array.from(document.getElementsByClassName("quantity"));
let price = document.getElementsByClassName("prx");
let btnMoins = document.querySelectorAll(".btn-moins");
let btnRemove = Array.from(document.getElementsByClassName("btn-delete"));
let btnLike = Array.from(document.getElementsByClassName("btn-like"));
let like = Array.from(document.getElementsByClassName("like"));
let totalPrice = document.getElementById("prix-total");
// -----------------------------------

// 3step/ EVENTS

// Increment

// btnPlus[0].addEventListener("click", function () {
//   // qtes[0].innerHTML = Number(qtes[0].innerHTML) + 1;
//   // qtes[0].innerHTML++; //
//   btnPlus[0].previousElementSibling.innerHTML++;
// });

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    // qtes[0].innerHTML = Number(qtes[0].innerHTML) + 1;
    // qtes[0].innerHTML++; //
    btnPlus[i].previousElementSibling.innerHTML++;
    total();
  });
}

// Decrement
for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 1) {
      // qtes[i].innerHTML--;
      btnMoins[i].nextElementSibling.innerHTML--;
      total();
    }
  });
}

// Remove
for (let i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", function () {
    btnRemove[i].parentElement.parentElement.remove();
    total();
  });
}

// like
for (let i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener("click", function () {
    if (like[i].style.fill == "red") {
      like[i].style.fill = "black";
    } else {
      like[i].style.fill = "red";
    }
  });
}

function total() {
  // let qtes = document.querySelectorAll(".quantity");
  // let price = document.querySelectorAll(".prx");
  let somme = 0;
  for (let i = 0; i < price.length; i++) {
    somme = somme + price[i].innerHTML.replace("$", "") * qtes[i].innerHTML;
  }
  totalPrice.innerHTML = somme;
}
