// // You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// 2 things need to be done - buy and sell - two for loops
// price:[7,1,5,3,6,4]
// days: [1,2,3,4,5,6]
// index:[0,1,2,3,4,5]

// buyDay = 1
// buyPrice = prices[buyDay] = 1


// sellDay = 4
// sellPrice = prices[sellDay] = 6

//profit = sellPrice-buyPrice = 6-1 = 5


/**
 * @param {number[]} prices
 * @return {number}
 */

var maxSingleProfit = function (prices){
    
}
var maxProfit = function(prices) {
    let minBuyPrice = prices [0] // we need to find what the min buy price is so we can sell on a higher price
    let maxProfit = 0
    for(i = 1; i < prices.length; i++){ //cant sell before buying so i needs to start at 1
        const sellPrice = prices[i]
        const profit = sellPrice-minBuyPrice
        maxProfit = Math.max(maxProfit, profit)
        minBuyPrice = Math.min(minBuyPrice, prices[i])
    }
    return max
};


// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.