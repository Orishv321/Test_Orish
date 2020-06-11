document.querySelector("#error_input_msg").style.display = "none";
var inputValid = false;

let checkValid_item = () => {
  let item = document.querySelector("#id_add_item").value;
  const reg = /^[a-z A-Z]{3,20}$/;
  if (!item.match(reg)) {
    document.querySelector("#id_error_item").innerHTML =
      "Should contain three or more alphabates";
  } else {
    document.querySelector("#id_error_item").innerHTML = "";
    itemName.push(item);
    loadList();
    inputValid = true;
  }
};
let checkValid_price = () => {
  let price = document.querySelector("#id_add_price").value;
  const reg = /^[0-9]{1,6}$/;
  if (!price.match(reg)) {
    document.querySelector("#id_error_price").innerHTML = "Should be a number";
  } else {
    document.querySelector("#id_error_price").innerHTML = "";
    inputValid = true;
  }
};
let checkValid_qty = () => {
  let qty = document.querySelector("#id_add_qty").value;
  const reg = /^[0-9]{1,4}$/;
  if (!qty.match(reg)) {
    document.querySelector("#id_error_qty").innerHTML = "Should be a number";
  } else {
    document.querySelector("#id_error_qty").innerHTML = "";
    inputValid = true;
  }
};

let addBill = () => {
  let item = document.querySelector("#id_add_item").value;
  let price = document.querySelector("#id_add_price").value;
  let qty = document.querySelector("#id_add_qty").value;
  if (!inputValid) {
    return (document.querySelector("#error_input_msg").style.display = "");
  } else {
    document.querySelector("#error_input_msg").style.display = "none";

    let data = {
      id: Math.random(),
      item: item,
      price: price,
      qty: qty,
      total: total(price, qty),
    };
    itemsList.push(data);
    clearetab();
    calculateSumtotal();
    inputValid = false;
  }
};
let total = (price, qty) => {
  let tot = Number(price) * Number(qty);
  return tot;
};
let calculateSumtotal = () => {
  let discount = document.querySelector("#id_add_discount").value;
  let sumTot = itemsList
    .map((amt) => amt.total)
    .reduce((a, c) => Number(a) + Number(c));
  sumTot =
    Number(sumTot) -
    (Number(sumTot) * Number(discount)) / 100 +
    (Number(sumTot) * 13) / 100;
  document.querySelector("#id_sumtotal").innerHTML = sumTot;
};
let clearetab = () => {
  let idsName = ["id_add_item", "id_add_price", "id_add_qty"];
  idsName.map((idss, key) => {
    document.getElementById(idss).value = "";
  });
  showBills();
};
