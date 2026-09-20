let payablePrice = (priceInRupee, discountInPercentage) => {
  let discount = priceInRupee * (discountInPercentage / 100);

  let discountedPrice = priceInRupee - discount;

  return discountedPrice;
};

 console.log( payablePrice(2000,10));