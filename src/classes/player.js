class Ship {
  constructor(length, hit, sunk) {
    this.length = length;
    this.hitten = 0;
    this.sunk = false;
  }
  hit() {
    // function to see how many hits my ship has received.
    this.hitten++;
  }
  isSunk() {
    return this.hitten >= this.length;
  }
}

module.exports = Ship;
