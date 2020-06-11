var home_info_check = false;
let checkValid_homwInfo = () => {
  let name = document.querySelector("#id_Name").value;

  let regName = /^[a-z A-Z]{3,20}$/;
  if (!name.match(regName)) {
    document.querySelector("#id_addHome_message").innerHTML =
      "<p>Cannot add bill informations Invalid <strong>Name</strong></p>";
    home_info_check = false;
  } else {
    document.querySelector("#id_addHome_message").innerHTML =
      "<p>Adding Bills to history ?</p>";
    home_info_check = true;
  }
};
let addToHistory = () => {
  let name = document.querySelector("#id_Name").value;
  let date = new Date().toLocaleString();
  let items = itemsList;
  let discount = document.querySelector("#id_add_discount").value;
  let sumtot = document.querySelector("#id_sumtotal").textContent;
  if (home_info_check) {
    data = {
      id: Math.random(),
      items: items,
      date: date,
      name: name,
      sumtotal: sumtot,
      discount: discount,
    };
    history.push(data);
    showHistory();
    home_info_check = false;
  }
};

let cleareAll = () => {
  let idsName = [
    "id_Name",
    "id_add_item",
    "id_add_price",
    "id_add_qty",
    "id_add_discount",
  ];
  if (confirm("Do you want to Reset Bills ?")) {
    idsName.map((idss, key) => {
      document.getElementById(idss).value = "";
    });
    itemsList = [];
    showBills();
  }
};
