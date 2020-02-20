function primeFactorsTo(max) {
  var store = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}

function primePyramid(length) {
  for (var i = 1; i <= length; i++) {
    var primes = [];
    var start = 2;
    while (primes.length < i) {
      primes = primeFactorsTo(start++);
    }
    console.log(primes.join(" "));
  }
}

console.log(primePyramid(5));
