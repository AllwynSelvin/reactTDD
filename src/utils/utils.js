export function formatcurrencyToUS(amount) {
  console.log("IN-------------->", amount);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  let currencyUSD = formatter.format(amount);
  return currencyUSD;
}

// Input: 9999999999
// Output: (999) 999-9999
export function phoneNumberFormatUS(number) {
  var cleaned = ("" + number).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}
