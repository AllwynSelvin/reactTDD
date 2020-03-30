import moment from "moment";
let billgroups = [
  {
    billGroupId: 957300001,
    billGroupName: "bcdferg",
    userBuNumber: "5",
    subGroupId: "5",
    groupId: "1904",
    groupName: "Bank Of America",
    pendingEnrollmentCount: 113,
    cobra: "",
    memberCount: 4,
    pendingMemberships: "0",
    activeMemberships: "4"
  },
  {
    billGroupId: 657300001,
    billGroupName: "abcdefg",
    userBuNumber: "0",
    subGroupId: "0",
    groupId: "1904",
    groupName: "Bank Of America",
    pendingEnrollmentCount: 21,
    cobra: "",
    memberCount: 2904,
    pendingMemberships: "0",
    activeMemberships: "2904"
  }
];

export const dateFormate = value => {
  return moment()
    .subtract(value, "month")
    .format("MM/DD/YYYY");
};

export const isValidPassword = pwd => {
  let pwdLen = pwd.length >= 8;
  var scRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let alphaRegex = /^[A-Za-z]/;
  let numRegex = /[0-9]/;
  let isContainsSC = scRegex.test(pwd);
  let isContainsNum = numRegex.test(pwd);
  let isContainsAlpha = alphaRegex.test(pwd);
  return pwdLen && isContainsSC && isContainsNum && isContainsAlpha;
};

export const sortAscending = value => {
  return billgroups.sort((a, b) => {
    return a[value] - b[value];
  });
};

export const formatcurrencyToUS = amount => {
  console.log("IN-------------->", amount, typeof amount);

  var amt = amount && amount.toString().split(".");
  //console.log(">>>>>>>>>>>>>>>1111", amt[0]);
  var cleaned = ("" + amt[0]).replace(/\D/g, "");
  //console.log(">>>>>>>>>>>>>>>2222", cleaned);
  var match = cleaned.match(/^[0-9]*$/);

  if (match) {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    let currencyUSD = formatter.format(match);
    return currencyUSD;
  }
  return null;
};

// Input: 9999999999
// Output: (999) 999-9999
export const phoneNumberFormatUS = number => {
  var cleaned = ("" + number).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
};
