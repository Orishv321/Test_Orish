let sortData = (state) => {
  if (state) {
    sampleData = sampleData.sort((a, b) => (a.price < b.price ? 1 : -1));
    load_data();
    sumTotal();
  } else {
    sampleData = sampleData.sort((a, b) => (a.price > b.price ? 1 : -1));
    load_data();
    sumTotal();
  }
};
