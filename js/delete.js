var delId = null;
let send_id = (id) => {
  delId = id;
};
let checkDelete = (value) => {
  value && deleteData(delId);
};
let deleteData = (id) => {
  sampleData = sampleData.filter((data) => data.id !== id);
  //   console.log(sampleData);
  load_data();
  sumTotal();
};
