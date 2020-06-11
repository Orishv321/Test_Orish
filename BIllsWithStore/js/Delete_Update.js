var checkDelete_Update = false;
var getId = null;
let updateInput = document.querySelector("#id_update_data");
//to delete
let sendId = (id) => {
  getId = id;
};

let checkDelete = () => {
  checkDelete_Update = true;
  checkDelete_Update && deleteData(getId);
};
let deleteData = (id) => {
  itemsList = itemsList.filter((list) => list.id !== id);
  showBills();
  calculateSumtotal();
};

//to update
let update_data = (id, item, price, qty) => {
  updateInput.innerHTML = `<div class="modal-body">
  <p class = "msg">Changes required to update</p>
  
<label>item:</label><br />
<input type="text" value="${item}" onblur="up_valid_item()" id="id_update_item"  /><br />
<span class ="err-msg" id = "id_update_err_item"></span><br/>

<label>price:</label><br />
<input type="text" value="${price}"  onblur="up_valid_price()" id="id_update_price" /><br />
<span class ="err-msg" id = "id_update_err_price"></span><br/>

<label>qty:</label><br />
<input type="text" value="${qty}" onblur="up_valid_qty()" id="id_update_qty" /><br />
<span class ="err-msg" id = "id_update_err_qty"></span><br/>

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
</div>`;
};

let up_valid_item = () => {
  let item = document.querySelector("#id_update_item").value;
  let itemReg = /^[a-z A-Z]{3,20}$/;
  if (!item.match(itemReg)) {
    document.querySelector("#id_update_err_item").innerHTML =
      "Should be a valid Item";
  } else {
    document.querySelector("#id_update_err_item").innerHTML = "";
    checkDelete_Update = true;
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
    checkDelete_Update = true;
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
    checkDelete_Update = true;
  }
};

let validUpdate = (id) => {
  let item = document.querySelector("#id_update_item").value;
  let price = document.querySelector("#id_update_price").value;
  let qty = document.querySelector("#id_update_qty").value;
  if (checkDelete_Update) {
    itemsList[id].item = item;
    itemsList[id].price = price;
    itemsList[id].qty = qty;
    itemsList[id].total = total(price, qty);
    checkDelete_Update = false;
    document.querySelector("#id_update_click").setAttribute("href", "#");
    showBills();
    calculateSumtotal();
  }
};
