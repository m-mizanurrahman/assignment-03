
// Problem-01: kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        meter = kilometer * 1000;
        return meter;
    }
    else if (kilometer < 0) {
        return `Distance can't be nagative`;
    }
    else {
        return 'Your input is invalid';
    }
}
var result = kilometerToMeter(-1);
console.log(result);



//Problem-02: budgetCalculator
function budgetCalculator(quantityWatch, quantityMobile, quantityLaptop) {
    if (quantityWatch >= 0 && quantityMobile >= 0 && quantityLaptop >= 0) {
        var sum = quantityWatch * 50 + quantityMobile * 100 + quantityLaptop * 500;
        return sum;
    }
    else if (quantityWatch < 0 || quantityMobile < 0 || quantityLaptop < 0) {
        return `Quantity can't be negative`;
    }

    else {
        return "You made a mistake! Please choose a valid quantity!"
    }

}
var result = budgetCalculator(-1, 5, 2);
console.log(result);



//Problem-03: hotelCost
function hotelCost(dayNumber) {

    if (dayNumber < 0) {
        return `Number of day can't be negative`;
    }
    else if (dayNumber <= 10) {
        cost = dayNumber * 100;
        return cost;
    }
    else if (dayNumber <= 20) {
        dayMoreTen = dayNumber - 10;
        cost = 10 * 100 + dayMoreTen * 80;
        return cost;
    }
    else if (dayNumber > 20) {
        dayMoreTwenty = dayNumber - 20;
        cost = 10 * 100 + 10 * 80 + dayMoreTwenty * 50;
        return cost;
    }
    else {
        return 'Please enter a valid number.'
    }
}
var result = hotelCost(-5);
console.log(result);



//Problem-04: megaFriend
function megaFriend(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
var result = megaFriend(['ram', 'munmun', 'aminul', 'robin']);
console.log(result);