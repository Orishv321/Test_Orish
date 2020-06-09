let updateValid = false;
let updateInput = document.querySelector("#id_update_data");
let updateData = (id, item, price, qty, discount) => {
  updateInput.innerHTML = `
  <div class="modal-body">
    <p class = "msg">Changes required to update</p>
    
  <label>item:</label><br />
  <input type="text" value="${item}" onblur="up_valid_item()" id="id_update_item"  /><br />
  <span class ="error-msg" id = "id_update_err_item"></span><br/>

  <label>price:</label><br />
  <input type="text" value="${price}"  onblur="up_valid_price()" id="id_update_price" /><br />
  <span class ="error-msg" id = "id_update_err_price"></span><br/>

  <label>qty:</label><br />
  <input type="text" value="${qty}" onblur="up_valid_qty()" id="id_update_qty" /><br />
  <span class ="error-msg" id = "id_update_err_qty"></span><br/>

  <label>discount:</label><br />
  <input
    type="text"
    value="${discount}"
    onblur="up_valid_discount()"
    id="id_update_discount"
  /><br />
  <span class ="error-msg" id = "id_update_err_discount"></span><br/>
  
</div>
<div class="modal-footer">
  <a href="#"
    ><i class="material-icons">clear</i></a
  >
  <a id="id_update_click"
    ><i class="material-icons" onclick="validUpdate(${id})"
      >check</i
    ></a
  >
</div>
  `;
};
let up_valid_item = () => {
  let item = document.querySelector("#id_update_item").value;
  let itemReg = /^[a-z A-Z]{3,20}$/;
  if (!item.match(itemReg)) {
    document.querySelector("#id_update_err_item").innerHTML =
      "Should be a valid Item";
  } else {
    document.querySelector("#id_update_err_item").innerHTML = "";
    updateValid = true;
  }
};
let up_valid_price = () => {
  let price = document.querySelector("#id_update_price").value;
  let priceReg = /^[0-9]{1,6}$/;

  if (!price.match(priceReg)) {
    document.querySelector("#id_update_err_price").innerHTML =
      "Should numbers within 6 digits";
  } else {
    document.querySelector("#id_update_err_price").innerHTML = "";
    updateValid = true;
  }
};
let up_valid_qty = () => {
  let qty = document.querySelector("#id_update_qty").value;
  let qtyReg = /^[0-9]{1,4}$/;
  if (!qty.match(qtyReg)) {
    document.querySelector("#id_update_err_qty").innerHTML =
      "Should numbers within 4 digits";
  } else {
    document.querySelector("#id_update_err_qty").innerHTML = "";
    updateValid = true;
  }
};
let up_valid_discount = () => {
  let discount = document.querySelector("#id_update_discount").value;
  let disReg = /^[0-9]{1,3}$/;
  if (!discount.match(disReg)) {
    document.querySelector("#id_update_err_discount").innerHTML =
      "Should numbers if no 0";
  } else {
    document.querySelector("#id_update_err_discount").innerHTML = "";
    updateValid = true;
  }
};

let validUpdate = (id) => {
  let item = document.querySelector("#id_update_item").value;
  let price = document.querySelector("#id_update_price").value;
  let qty = document.querySelector("#id_update_qty").value;
  let discount = document.querySelector("#id_update_discount").value;
  if (!updateValid) {
  } else {
    updateValid = false;
    document.querySelector("#id_update_click").setAttribute("href", "#");
    sampleData[id].item = item;
    sampleData[id].price = price;
    sampleData[id].qty = qty;
    sampleData[id].discount = discount;
    sampleData[id].total = total(price, qty, discount);

    load_data();
    sumTotal();
  }
};
