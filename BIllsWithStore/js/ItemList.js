let itemList = document.querySelector(".itemClass");
let loadList = () => {
  itemList.innerHTML = "";
  itemName
    .filter((v, i) => itemName.indexOf(v) === i)
    .map((item) => (itemList.innerHTML += `<option value="${item}"></option>`));
};
loadList();
