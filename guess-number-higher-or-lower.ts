/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let low = 1;
  let high = n;
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) high = mid - 1;
    if (guess(mid) === 1) low = mid + 1;
  }
  return mid;
}

var guess = function (num) {
  return num;
};
