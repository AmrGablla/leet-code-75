// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   for (let i = 0; i < flowerbed.length; ) {
//     const sum = flowerbed[i] + flowerbed[i + 1] + flowerbed[i + 2];
//     if (sum == 0) {
//       i += 2;
//       n = n - 1;
//     } else {
//       i++;
//     }
//     if (n == 0) return true;
//   }
//   return false;
// }

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (n == 0) return true;
    const pre = flowerbed[i - 1];
    const current = flowerbed[i];
    const next = flowerbed[i + 1];
    const preOk = pre == undefined || pre == 0;
    const nextOk = next == undefined || next == 0;

    if (preOk && current == 0 && nextOk) {
      flowerbed[i] = 1;
      n--;
    }
    if (n == 0) return true;
  }
  return false;
}

let case3 = [1, 0, 0, 0, 1, 0, 0];

console.log(canPlaceFlowers(case3, 2));
