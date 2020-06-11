let sortData = (state) => {
  if (state === true) {
    sampleData = sampleData.sort((a, b) => (a.price < b.price ? 1 : -1));
    load_data();
    sumTotal();
  } else {
    sampleData = sampleData.sort((a, b) => (a.price > b.price ? 1 : -1));
    load_data();
    sumTotal();
  }
};
