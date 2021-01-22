/* https://github.com/hasan178821/assignment-js/blob/main/assignment.js */

// kilometerToMeter Section Start 
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


// budgetCalculator Section Start
function budgetCalculator(watch, mobile, laptop) {
    var sum = watch * 50 + mobile * 100 + laptop * 500;
    return sum;
}


// hotelCost Section Start
function hotelCost(day) {
    var money = 0;
    if (day <= 10) {
        var firstCost = day * 100;
    } else if (day <= 20) {
        var firstCost = 10 * 100;
        var remaining = day - 10;
        var secondCost = remaining * 80;
        var sum = firstCost + secondCost;

    } else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = day - 20;
        var thirdCost = remaining * 50;
        var sum = firstCost + secondCost + thirdCost;
    }
    return sum;
}


// megaFriend Section Start
var allFriends = [hasan, sayed, sohel, ismail, rana, liton];

function megaFriend(big) {
    var bigName = big[0];
    for (var i = 0; i < big.length; i++) {
        if (big[i].length > bigName.length) {
            bigName = big[i];
        }
    }
    return bigName;
}