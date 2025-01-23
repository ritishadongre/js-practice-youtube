const accountId = 144553;
let accountEmail = "ritishadongre@gmail.com";
var accountPassword = "12345";
accountCity = "Pandhurna"; //not recommeded
let accountState;

console.log(accountId, accountEmail, accountPassword, accountCity);

accountEmail = "abc@gmail.com";
accountPassword = "121212";
accountCity = "Bangalore";

console.table([accountId, accountEmail, accountPassword, accountCity]);
console.log(accountState);
/*
Prefer not to use var because of issue in block scope and functional scope
*/
