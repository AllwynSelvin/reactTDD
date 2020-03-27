import { formatcurrencyToUS } from "./utils";

describe("check the number returns currency format as expected", () => {
  it("check currency format returns", () => {
    const comp = formatcurrencyToUS(50000);
    expect(comp).toEqual("$50,000.00");
    //console.log("comp>>>>>", comp);
  });
});
