// use settimeout to display your name in 5 seconds

const displayName = () => {
  console.log("Lavina");
};
setTimeout(displayName, 3000);
// -------------------------------------------------------

// first example sale price
let originalPrice = 100;
let sale = true;
let salePrice = 50;

setTimeout(function () {
  console.log(`Sale! Sale! Sale! price ${salePrice}`);
}, 1000);

sale = false;
salePrice = originalPrice;
console.log(`The sale has ended! The price is now  ${originalPrice}`);



// Promises 
// -------------------------------------------------------

// user Authentication
const myPromise = new Promise((resolve, reject) => {
  let userAuthentication = true;
  if (userAuthentication) {
    resolve("Login successful ");
  } else {
    reject("unsuccessful Login");
  }
});

// consuming the promise
myPromise
  .then(() => {
    console.log(`Display successful Login message with a greeting`);
  })
  .then(() => {
    console.log(` Proceed to display Welcome Screen`);
  })
  .catch(() => {
    console.log(` Display unsuccessful login message`);
  });
// -------------------------------------------------------

  // IsMumHappy
const newPr = new Promise((resolve, reject) => {
  const isMumHappy = true;
  if (isMumHappy) {
    resolve("You get a samsung phone");
  } else {
    reject("You don't get a phone");
  }
});
console.log(newPr);

// consuming the promise -- chaining promises
newPr
  .then(function () {
    console.log("Get money from the bank ");
  })
  .then(function () {
    console.log("Buy phone online ");
  })
  .catch(function (error) {
    // used catch to handle rejection
    console.log("Request failed", error);
  });
  // -------------------------------------------------------
