function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  let minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    result += word1.charAt(i) + word2.charAt(i);
  }

  if (word1.length > minLength) {
    result += word1.slice(minLength);
  }

  if (word2.length > minLength) {
    result += word2.slice(minLength);
  }

  return result;
};

/**
 * First submttion
 *
 *  submitted with below the avarge.
 *  i think i can did that all in map func.
 */

// function mergeAlternately(word1: string, word2: string): string {
//   let chartArr1 = word1.split("");
//   let chartArr2 = word2.split("");
//   let result = "";

//   for (let i = 0; i < chartArr1.length; i++) {
//     if (chartArr2[i] === undefined) {
//       result += chartArr1[i];
//     } else {
//       result += chartArr1[i] + chartArr2[i];
//     }
//   }

//   if (chartArr1.length < chartArr2.length) {
//     for (let i = chartArr1.length; i < chartArr2.length; i++) {
//       result += chartArr2[i];
//     }
//   }
//   return result;
// }

let result: string = mergeAlternately("abc", "pqr");
if (result === "apbqcr") {
  console.log(true);
} else {
  console.log(false);
}

let result1: string = mergeAlternately("ab", "pqrs");
if (result1 === "apbqrs") {
  console.log(true);
} else {
  console.log(false);
}

let result2: string = mergeAlternately("abcd", "pq");
if (result2 === "apbqcd") {
  console.log(true);
} else {
  console.log(false);
}
