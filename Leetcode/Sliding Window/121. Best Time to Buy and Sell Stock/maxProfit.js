var maxProfit = function(prices) {
    let windowStart = 0;
    let currentMax = 0;

    for (windowEnd = 1; windowEnd < prices.length; windowEnd++) {
        while (prices[windowStart] > prices[windowEnd]) {
            windowStart++;
            continue;
        }
        currentMax = Math.max(currentMax, prices[windowEnd] - prices[windowStart]);
    }

    return currentMax;
};