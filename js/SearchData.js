document.getElementById("body_search").style.display = "none";

let searchdata = document.querySelector("#id_search");
let searchBody = document.querySelector("#body_search");
let search_data = () => {
  //to show and hide the data

  const reg = /^[a-z A-Z]{3,20}$/;

  // to validate the search
  if (searchdata.value.match(reg)) {
    document.getElementById("body_data").style.display = "none";
    document.getElementById("input_data").style.display = "none";
    document.getElementById("body_search").style.display = "";

    sampleData
      .filter((data) => data.item === searchdata.value)
      .map(
        (data) =>
          (searchBody.innerHTML += `<tr role="row">
      <td data-title="Item" role="cell">${data.item}</td>
      <td data-title="Price" role="cell">${data.price}</td>
      <td data-title="Qty" role="cell">${data.qty}</td>
      <td data-title="Discount" role="cell">${data.discount}</td>
      <td data-title="Total" role="cell">Rs.${data.total}</td>
      <td data-title="Delete" role="cell">
        <i class="material-icons" onclick="reveryDisplay()">cached</i>
      </td>
    </tr>`),
      );
  }
};
let reveryDisplay = () => {
  document.getElementById("body_data").style.display = "";
  document.getElementById("input_data").style.display = "";
  document.getElementById("body_search").style.display = "none";
};
