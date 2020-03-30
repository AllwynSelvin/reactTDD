import { formatcurrencyToUS, phoneNumberFormatUS } from "./utils";

fdescribe("check the utils format as expected", () => {
  it("check currency format returns", () => {
    let comp = formatcurrencyToUS("50000");
    expect(comp).toEqual("$50,000.00");

    comp = formatcurrencyToUS(100);
    expect(comp).toEqual("$100.00");

    // comp = formatcurrencyToUS("$100");
    // expect(comp).toEqual("$100.00");

    // comp = formatcurrencyToUS("$10,000");
    // expect(comp).toEqual("$100.00");

    //console.log("comp>>>>>", comp);
  });

  it("check US phone number format returns", () => {
    let comp = phoneNumberFormatUS(1234567890);
    expect(comp).toEqual("(123) 456-7890");

    comp = phoneNumberFormatUS(123456789000);
    expect(comp).toEqual(null);

    comp = phoneNumberFormatUS(12345);
    expect(comp).toEqual(null);

    comp = phoneNumberFormatUS("12345");
    expect(comp).toEqual(null);

    // comp = phoneNumberFormatUS("(123) 456-7890");
    // expect(comp).toEqual(null);

    //console.log("comp>>>>>", comp);
  });
});
