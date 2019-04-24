//const stripe = Stripe('key');
//const elements = stripe.elements();

function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

// open modal
function openProductModal(id) {
  console.log(id)
  // pass in title, set as modal title
  let productTitle = document.querySelector(`#${id} .card-title`)
  // could also be done by productTitle = document.getElementByID(productID);
  let modalTitle = document.querySelector('#productItemTitle')

  // pass in text, set as description
  let productDetails = document.querySelector(`#${id} .card-text`)
  let modalDetails = document.querySelector('#productItemDescription')

  // pass in price, set as price in modal
  let productPrice = document.querySelector(`#${id} .card-price`)
  console.log(productPrice)
  let modalPrice = document.querySelector('#productItemPrice')

  console.log(modalPrice.innerHTML=2)

  modalTitle.innerHTML = productTitle.innerHTML
  modalDetails.innerHTML = productDetails.innerHTML
  modalPrice.innerHTML = productPrice.innerHTML


  $('#purchaseProductModal').modal('show')
}

//object - create that has all form info
// let obj = {};
//$('#payment-form')
//.serializeArray()
//.foreach(val)

