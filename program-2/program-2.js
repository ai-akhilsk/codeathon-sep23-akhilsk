  // add documentation in the method above to explain what this function does

function findMaxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (const price of prices) {
      if (price < minPrice) {
        minPrice = price;
      } else if (price - minPrice > maxProfit) {
        maxProfit = price - minPrice;
      }
    }
  
    return maxProfit > 0 ? maxProfit : -1;
  }
