const user = {
  username: "Shravan",
  loginCount: 8,
  signedIn: true,
  
}

let str = "{ \"expectedProfit\":0.10,\"cashAmount\":10,\"cashCurrency\":\"EUR\",\"cryptoAddress\":\"shravan@mxicoders.com\",\"cryptoAmount\":1,\"cryptoCurrency\":\"VE10\",\"discountCode\":\"MYDISC\",\"discountQuotient\":1,\"errorCode\":0,\"feeDiscount\":100.00,\"localTransactionId\":\"EZ3OCP\",\"remoteTransactionId\":\"RM23IU\",\"status\":1,\"terminalSerialNumber\":\"BT300300\",\"detail\":\"11111111111111111111111111111111111111111111111111111111c8c394f7\",\"sold\":false,\"withdrawn\":false,\"relatedRemoteTransactionId\":null,\"cellPhoneUsed\":null,\"fixedTransactionFee\":0,\"identityPublicId\":\"IR8CYU4BV74T2TXE\",\"note\":null,\"rateSourcePrice\":10,\"serverTime\":1678341815337,\"exchangeStrategyUsed\":0,\"purchased\":false,\"terminalTime\":1678345415337,\"risk\":false,\"autoexecuted\":false,\"cryptoDiscountAmount\":0.000999,\"banknotes\":null,\"type\":0}";

console.log(JSON.parse(str));
