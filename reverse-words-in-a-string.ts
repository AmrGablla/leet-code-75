function reverseWords(s: string): string {
  s = s.trimStart();
  s = s.trimEnd();
  s = s.replace(/\s+/g, " ");
  let arrOfWords = s.split(" ");

  let resultArr: string[] = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const element = arrOfWords[i];
    resultArr[arrOfWords.length - i - 1] = element;
  }

  return resultArr.join(' ');
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
