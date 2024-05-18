function largestAltitude(gain: number[]): number {
  let highest = 0;

  let prefixSum = new Array(gain.length + 1);
  prefixSum[0] = 0;

  for (let i = 0; i < gain.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + gain[i];
  }

  for (let j = 0; j < prefixSum.length; j++) {
    if (prefixSum[j] > highest) highest = prefixSum[j];
  }
  return highest;
}

let gain = [-4, -3, -2, -1, 4, 3, 2];
const res = largestAltitude(gain);
console.log(res);
