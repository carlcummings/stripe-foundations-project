function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal(id) {
  console.log(id)
  let productTitle = document.querySelector(`#${id} .card-title`)
  let modalTitle = document.querySelector('#productItemTitle')
  let productDetails = document.querySelector(`#${id} .card-text`)
  let modalDetails = document.querySelector('#productItemDescription')
  let productPrice = document.querySelector(`#${id} .card-price`)
  console.log(productPrice)
  let modalPrice = document.querySelector('#productItemPrice')
  console.log(modalPrice.innerHTML=2)

  modalTitle.innerHTML = productTitle.innerHTML
  modalDetails.innerHTML = productDetails.innerHTML
  modalPrice.innerHTML = productPrice.innerHTML


  $('#purchaseProductModal').modal('show')
}


//productItemDescription