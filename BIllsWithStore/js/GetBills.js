let displayBill = document.querySelector("#id_display_data");
let cards = document.querySelector("#id_history_show");
let showBills = () => {
  displayBill.innerHTML = "";
  itemsList.map((data, key) => {
    displayBill.innerHTML += `
    <tr role="row" >
      <td  data-title="Item" role="cell">${data.item}</td>
      <td  data-title ="Price" role="cell">${data.price}</td>
      <td  data-title ="Qty" role="cell">${data.qty}</td>
      <td  data-title ="Total" role="cell">${data.total}</td>
      <td  data-title ="Maintain" role="cell"> 
      <a href="#modal-update"><i class="material-icons" onclick = "update_data(${key},'${data.item}',${data.price},${data.qty})">edit</i></a>
          <a href="#modal-one">
          <i class="material-icons" onclick = "sendId(${data.id})" >delete</i>
          </a>
      </td>  
    </tr>`;
  });
};
let showHistory = () => {
  cards.innerHTML = ``;

  history.map((h, key) => {
    cards.innerHTML += `
    <div class="card-inner">
    <div class="card-title space-evenly"> 
    <div> <i class="material-icons">date_range</i><strong>${h.date}</strong></div><br/>
    <div> <i class="material-icons">person</i><strong></strong>${h.name}</div> 
    </div>
    <div class="card-body space-between">
    <div>Rs. <strong>${h.sumtotal}</strong></div>
    <i class="large material-icons">arrow_forward</i>
    </div>
    </div>`;
  });
};
showBills();
showHistory();
