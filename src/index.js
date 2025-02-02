// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML=subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const allProductSubtotal = document.getElementsByClassName(".product");
    for (let i =0; i < allProductSubtotal.length; i++) {
      let subtotal = updateSubtotal(allProductSubtotal[i]);
      total += subtotal;
    }
  return total;
}


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
