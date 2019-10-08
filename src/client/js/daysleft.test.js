const { calcDays } = require("./daysLeft.js");

it("Works", () => {
  let date1 = new Date("1-1-1999");
  let date2 = new Date("1-1-2000");
  expect(calcDays(date1, date2)).toBeGreaterThan(0);
});
