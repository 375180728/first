function Person(name) {
    this.name = name;
    this.toString = function() {
        return this.name;
    }
}


//r为实部 i为虚部
function Complex(r, i) {
    if (isNaN(r) || isNaN(i)) {
        throw new TypeError();
    }
    this.r = r;
    this.i = i;
}

Complex.prototype.mul = function(that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
};

Complex.prototype.add = function(that) {
    return new Complex(this.r + that.r, this.i + that.i);
};

Complex.prototype.mag = function() {
    return Math.sqrt(this.r * this.r + this.i * this.i);
};

Complex.prototype.neg = function() {
    return new Complex(this.r, -this.i);
}

Complex.prototype.toString = function() {
    return "{" + this.r + "," + this.i + "}";
};

Complex.prototype.equal = function(that) {
    return that != null &&
        that.constructor === Complex &&
        this.r === that.r && this.i === that.i;
};

var num1 = new Complex(1, -1);
var num2 = new Complex(-1, 1);
console.log(num1.mul(num2));