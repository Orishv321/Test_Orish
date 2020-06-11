let sortByPrice = () => {
  itemsList = itemsList.sort((a, b) => (a.price < b.price ? 1 : -1));
  console.log(itemsList);
  showBills();
};
