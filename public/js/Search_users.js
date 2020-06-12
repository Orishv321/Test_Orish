let search_User = () => {
  cards.innerHTML = ``;
  let search = document.querySelector("#id_search").value;
  if (search) {
    let users = history.filter((history) => history.name == search);
    console.log(search);
    console.log(users);
    users.map((h, key) => {
      cards.innerHTML += `
        <div class="card-inner">
        <div class="card-title space-evenly"> 
        <div> <i class="material-icons">date_range</i><strong>${h.date}</strong></div><br/>
        <div> <i class="material-icons">person</i><strong></strong>${h.name}</div> 
        </div>
        <div class="card-body space-between">
        <div>Rs. <strong>${h.sumtotal}</strong></div>
        <i class="large material-icons" onclick ="showTabHistory(${h.id})">arrow_forward</i>
        </div>
        </div>`;
    });
  } else {
    showHistory();
  }
};
