// function cekPalindrome(arr) {
//   let result = 0;
//   let con = 0;
//   for (var i = 0; i < arr[0].length; i++) {
//     let str = arr[1];
//     let temp = "";
//     for (var j = 0; j < arr[1].length; j++) {
//       if (i < i + arr[1].length) {
//         temp += arr[0][i + j];
//       }
//     }
//     // console.log(i,'<<<',arr[0][i],'>>>>>>',temp);
//     if (temp == arr[1]) {
//       result++;
//     }
//   }
//   return result;
// }

// // console.log(cekPalindrome())
// function soal(input) {
//   let balik = "";
//   let standar = input[0];
//   for (var i = input[0].length - 1; i >= 0; i--) {
//     balik += input[0][i];
//   }
//   return cekPalindrome([standar, input[1]]) + cekPalindrome([balik, input[1]]);
// }
// console.log(soal(["banananana", "nana"]));

// Cara kedua

function hitung(arr) {
  let result = 0;
  // let con = 0;
  for (var i = 0; i < arr[0].length; i++) {
    // let str = arr[1];
    let temp = "";
    for (var j = 0; j < arr[1].length; j++) {
      if (i < i + arr[1].length) {
        temp += arr[0][i + j];
      }
    }
    // console.log(i,'<<<',arr[0][i],'>>>>>>',temp);
    if (temp == arr[1]) {
      result++;
    }
  }
  return result;
}

// console.log(hitung())
function soal(input) {
  let balik = "";
  let standar = input[0];
  for (var i = input[0].length - 1; i >= 0; i--) {
    balik += input[0][i];
  }
  return hitung([standar, input[1]]) + hitung([balik, input[1]]);
}
console.log(soal(["banananana", "nana"]));
