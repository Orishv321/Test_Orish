let list = ["Pen ", "Ink", "BallPen"];
let itemList = document.querySelector(".itemClass");
let loadList = () => {
  itemList.innerHTML = "";
  list.map(
    (item) => (itemList.innerHTML += `  <option value="${item}"></option>`),
  );
};
loadList();
