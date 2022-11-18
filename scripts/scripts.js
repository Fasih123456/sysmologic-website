const button1 = document.getElementById("basic-buy");
button1.addEventListener("click", processSale(1));

const button2 = document.getElementById("modern-buy");
button2.addEventListener("click", processSale(2));

const button3 = document.getElementById("full-stack-buy");
button3.addEventListener("click", processSale(3));

function processSale(saleType) {
  const select = document.getElementById("package-selection");
}
