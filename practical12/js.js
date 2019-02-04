function calculateBalance() {
    var family = parseFloat(document.getElementById("family").value);
    var friends = parseFloat(document.getElementById("friends").value);
    var self = parseFloat(document.getElementById("self").value);
    var party = parseFloat(document.getElementById("party").value);
    var food = parseFloat(document.getElementById("food").value);
    var budgetAvailable = parseFloat(document.getElementById("budgetavail").value);

    var balance = budgetAvailable - (family + friends + self + party + food);

    if (balance > 0) {
        alert("Merry Christmas and Enjoy your holiday!")
    }
    else {
        alert("Merry Christmas and don’t get painful after the holiday!")
    };
}