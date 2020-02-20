function decimalToBinary(number) {
  let binary = [];
  while (number > 0) {
    binary[binary.length] = number % 2;
    number >>= 1;
  }
  console.log("Binary number: " + binary.reverse().join(""));
}

decimalToBinary(5);
