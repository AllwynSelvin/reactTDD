export function formatcurrencyToUS(amount) {
  console.log("IN-------------->", amount);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  let currencyUSD = formatter.format(amount);
  return currencyUSD;
}
