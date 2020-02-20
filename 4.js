function AscendingSort(angka) {
  for (var i = 0; i < angka.length; i++) {
    for (var j = 0; j < angka.length; j++) {
      if (angka[j] > angka[j + 1]) {
        var temp = angka[j];
        angka[j] = angka[j + 1];
        angka[j + 1] = temp;
      }
    }
  }
  return `Data Terkecil : ${angka[0]} Data Terbesar : ${
    angka[angka.length - 1]
  } Ascending Sort:${angka}`;
}

// TEST CASES
console.log(AscendingSort([6, 22, 34, 15, 2, 13, 26, 57, 42, 32]));

function DescendingSort(angka) {
  for (var i = 0; i < angka.length; i++) {
    for (var j = 0; j < angka.length; j++) {
      if (angka[j] < angka[j + 1]) {
        var temp = angka[j];
        angka[j] = angka[j + 1];
        angka[j + 1] = temp;
      }
    }
  }
  return `Data Terbesar : ${angka[0]} Data Terkecil : ${
    angka[angka.length - 1]
  } Descending Sort:${angka}`;
}

// TEST CASES
console.log(DescendingSort([6, 22, 34, 15, 2, 13, 26, 57, 42, 32]));
