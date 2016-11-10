function tribonacci(signature,n){
  let successArray = signature;
  let nextSig = signature;
  for (let i = 0; i < n-3; i++) {
      let sum = nextSig.reduce(function(a, b) { return a + b; }, 0);
      successArray.push(sum);
      nextSig = successArray.slice(-3);
  }
  if (n == 0) {
    successArray = [];
  }
  if (n < 3 && n > 0) {
    successArray = [successArray.shift(n)];
  }
  return successArray;
}

module.exports = tribonacci;
