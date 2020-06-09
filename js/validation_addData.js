let valid = false;
let valid_item = () => {
  let item = document.querySelector("#id_item").value;
  const reg = /^[a-z A-Z]{3,20}$/;
  if (!item.match(reg)) {
    valid = false;
    document.querySelector("#id_item_err").innerHTML = "Should be a valid Item";
  } else {
    valid = true;
    document.querySelector("#id_item_err").innerHTML = "";
    list.push(item);
    loadList();
  }
};
let valid_price = () => {
  let price = document.querySelector("#id_price").value;
  const reg = /^[0-9]{1,6}$/;
  if (!price.match(reg)) {
    valid = false;
    document.querySelector("#id_price_err").innerHTML =
      "Should numbers within 6 digits";
  } else {
    valid = true;
    document.querySelector("#id_price_err").innerHTML = "";
  }
  //   console.log(price);
};
let valid_qty = () => {
  let qty = document.querySelector("#id_qty").value;
  const reg = /^[0-9]{1,4}$/;
  if (!qty.match(reg)) {
    valid = false;
    document.querySelector("#id_qty_err").innerHTML =
      "Should numbers within 4 digits";
  } else {
    valid = true;
    document.querySelector("#id_qty_err").innerHTML = "";
  }
  //   console.log(qty);
};
let valid_discount = () => {
  let discount = document.querySelector("#id_discount").value;
  const reg = /^[0-9]{1,3}$/;
  if (!discount.match(reg)) {
    valid = false;
    document.querySelector("#id_discount_err").innerHTML =
      "Should numbers if no 0";
  } else {
    valid = true;
    document.querySelector("#id_discount_err").innerHTML = "";
  }
  //   console.log(discount);
};
let total = (price, qty, discount) => {
  let sum = Number(price) * Number(qty);
  let total = Number(sum) - (Number(sum) * Number(discount)) / 100;
  return total;
};
let addInvolce = () => {
  let item = document.querySelector("#id_item").value;
  let price = document.querySelector("#id_price").value;
  let qty = document.querySelector("#id_qty").value;
  let discount = document.querySelector("#id_discount").value;

  if (!valid)
    return (document.getElementById("id_warning_msg").style.display = "block");
  if (valid) {
    data = {
      id: Math.random(),
      date: new Date().toLocaleString(),
      item: item,
      price: price,
      qty: qty,
      discount: discount,
      total: total(price, qty, discount),
    };
    sampleData.push(data);
    load_data();
    sumTotal();
    // console.log(data);
  }
};
