//No:1 >> Seer to Mon Converter
function seerToMon(number) {

    //Conditions for unwanted input and the functions condition
    if (number < 0 || typeof number == 'string') {
        return 'Input cannot be negative number or a string';
    }

    let mon = number / 40;
    return mon;
}

const totalMon = seerToMon(1200);
console.log('Total Mon:', totalMon);





//No:2 >> Total Sales Cost Counting
function totalSales(shirt, pant, shoes) {

    //Conditions for unwanted input and the functions condition
    if (totalSales < 0 || typeof totalSales == 'string') {
        return 'Input cannot be negative number or a string';
    }

    let shirtTotalPrice = shirt * 100;          //Assigning Essential Variables
    let pantTotalPrice = pant * 200;            //Assigning Essential Variables
    let shoesTotalPrice = shoes * 500;          //Assigning Essential Variables

    let totalCost = shirtTotalPrice + pantTotalPrice + shoesTotalPrice;
    return totalCost;
}
const totalSalesPrice = totalSales(1, 1, 1);
console.log('Total Selling Price:', totalSalesPrice);





//No:3 >> Find the total Delivery Cost of Quantity Products
function deliveryCost(tShirtNumber) {

    //Conditions for unwanted input and the functions condition
    if (tShirtNumber < 0 || typeof tShirtNumber == 'string') {
        return 'Input cannot be negative number or a string';
    }

    if (tShirtNumber <= 100) {
        const deliveryCost = tShirtNumber * 100;            //Assigning Essential Variables
        return deliveryCost;
    }
    else if ((tShirtNumber > 100) && (tShirtNumber <= 200)) {
        const leftOfItems = tShirtNumber - 100;             //Assigning Left of items Variables
        const deliveryCost = 10000 + (leftOfItems * 80);    //Calculate The Essential Value
        return deliveryCost;
    }
    else if (tShirtNumber > 200) {
        const leftOfItems = tShirtNumber - 200;             //Assigning Left of items Variables
        const deliveryCost = 18000 + (leftOfItems * 50);    //Calculate The Essential Value
        return deliveryCost;
    }
    else {
        return deliveryCost;
    }
}
const totalDeliveryCost = deliveryCost('10');
console.log('Total Delivery Cost:', totalDeliveryCost);





//No:4 >> Find The Perfect Friend Of Mine
function perfectFriend(friendsName) {

    //Conditions for unwanted input and the functions condition
    if (friendsName < 0 || typeof friendsName > 0) {
        return 'Input cannot be negative number or positive Number';
    }

    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length == 5) {                   // Array Character Length Check
            letterCount = friendsName[i];                   // Find and Assign the five letter name
        }
    }
    return letterCount;
}

let friendsName = ['Shakil', 'Imroz', 'Tor', 'Razz'];
const fiveLetterName = perfectFriend(friendsName);
console.log('First five letter friend name:', fiveLetterName);