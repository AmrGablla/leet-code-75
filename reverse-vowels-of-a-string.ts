function reverseVowels(s: string): string {
  var strArray = s.split("");
  var vowelsIndices: number[] = [];

  //   let foundVowels = -1;
  for (var index = 0; index < strArray.length; index++) {
    if (isVowel( strArray[index])) {
        vowelsIndices.push(index);
    }
  }

  // Reverse the vowels in the array
  for (let i = 0; i < vowelsIndices.length / 2; i++) {
    const index1 = vowelsIndices[i];
    const index2 = vowelsIndices[vowelsIndices.length - 1 - i];
    swapCharacters(strArray, index1, index2);
  }

  return strArray.join("");
}

function swapCharacters(strArray: string[], index1: number, index2: number) {
  const temp = strArray[index1];
  strArray[index1] = strArray[index2];
  strArray[index2] = temp;
}

function isVowel(c: string): boolean {
  return vowelsMap.has(c.toLowerCase());
}

const vowelsMap = new Map<string, boolean>([
  ["a", true],
  ["e", true],
  ["i", true],
  ["o", true],
  ["u", true],
]);

const res = reverseVowels("race car");
console.log(res);
console.log(res === "race car");
