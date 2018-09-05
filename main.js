function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  if (0 > n ||  n >= 1000000) {
    throw 'Error: The given number must be greater than 0 an less than 1,000,000.';
  }
  var p = 0; // Power
  var bits = ''; // String 
  var result = null; // Result random number

  while (true) {
    if ((2**p)-1 < n) { // Find the min power of 2 that is greater than n
      p++;
      bits += (flip() ? '1' : '0'); // Add a bit to string bits
    } else {
      result = parseInt(bits, 2);
      if (result < n) {
        break; // If result < N braks the loop
      } else { // Repeat the the whole porcess if result number is equals or greater than n
        bits = '';
        p = 0;
      }
    }
  }
  return result;
}

console.log(randomNumber(500));
console.log(randomNumber(1));
console.log(randomNumber(500));
console.log(randomNumber(1000001));
