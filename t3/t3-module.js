
function detectPrice(input) {
    var price
    const ticket_price = 400;
    var age = parseInt(input, 10);
    if (isFullPrice(age)) {
        price = (ticket_price);
        return price;
    }//if
    else if (isHalfPrice(age)) {
        price = (ticket_price / 2);
        return price;
    }//else if 

}
module.exports = {
    detectPrice,
    isHalfPrice,
    isFullPrice,
};

function isHalfPrice(age) {
    return (age <= 6) || (age >= 65);
}

function isFullPrice(age) {
    return (age > 6) && (age < 65);
}

