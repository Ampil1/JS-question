/*
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));//5
console.log(maxProfit([100 ,180 ,260 ,310 ,40 ,535 ,695]));

// function syncNetworkRequest(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url, false);
//   xhr.send();
//   return xhr.responseText;
// }

//  console.log(syncNetworkRequest('https://example.com/data'));
// response()
// console.log(response);