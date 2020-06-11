let tab = document.querySelector("#id_display_data_show");
let showAddBills = () => {
  document.querySelector("#bills_show").style.display = "none";
  document.querySelector("#bills_add").style.display = "";
};
let showTabHistory = (id) => {
  document.querySelector("#bills_add").style.display = "none";
  document.querySelector("#bills_show").style.display = "";
  let user = history.filter((h) => h.id === id);
  let reqUser = user[0];
  //   console.log(reqUser);
  document.querySelector("#id_date_today_show").innerHTML = `${reqUser.date}`;
  document.querySelector("#id_Name_show").innerHTML = `${reqUser.name}`;
  document.querySelector("#id_sumtotal_show").innerHTML = `${reqUser.sumtotal}`;
  document.querySelector("#id_discount_show").innerHTML = `${reqUser.discount}`;
  //   console.log(reqUser.items);
  tab.innerHTML = ``;
  reqUser.items.map((data, key) => {
    tab.innerHTML += `<tr role="row" >
    <td  data-title="Item" role="cell">${data.item}</td>
    <td  data-title ="Price" role="cell">${data.price}</td>
    <td  data-title ="Qty" role="cell">${data.qty}</td>
    <td  data-title ="Total" role="cell">${data.total}</td>
     
  </tr>`;
  });
};
