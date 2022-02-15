function calculatePricePerUnit(unit, price, name) { 
    var price = unit * price +  name;
    return price; 
}
var unitPrice = calculatePricePerUnit(32553, 916, " tokens");


document.getElementById("unit").innerHTML = unitPrice;
