var array = [3, 6, 2, 56, 32, 5, 89, 32];
let max = array[0];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element > max) {
    max = element;
  }
}

const max2 = Math.max(...array);

var str = "hello world";

console.log(str.charAt(100) + " fadddddy");

console.log(max2);
console.log(max);
