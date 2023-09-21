/**
 * Finds the maximum profit that can be made by buying and selling stocks.
 * @param {number[]} prices - An array of stock prices.
 * @returns {number} The maximum profit that can be made, or -1 if no profit can be made.
 */
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
