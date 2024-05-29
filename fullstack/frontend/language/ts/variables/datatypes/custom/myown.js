var food = /** @class */ (function () {
    function food(mybriyani) {
        this.briyani = mybriyani;
        this.poratta = 8;
        this.shawarma = 6;
        this.dosa = 3;
        this.idly = 1;
        this.rice = 7;
        this.pizza = 2;
        this.burger = 1;
    }
    food.prototype.eatbriyani = function () { };
    return food;
}());
var restra = new food(9);
console.log(restra);
