const Ship = require("./player");

describe("Ship", () => {
  let ship;

  // Runs before each test
  beforeEach(() => {
    ship = new Ship(5, 0, 0); // Create a new instance of Ship
  });

  // Test the hit method
  test("ship has been hit", () => {
    ship.hit();
    expect(ship.hitten).toBe(1);
  });

  //Testing sunk method.

  test("item has sunk", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
