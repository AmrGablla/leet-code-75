function removeStars(s: string): string {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "*") {
      stack.length ? stack.pop() : i++;
    } else {
      stack.push(element);
    }
  }
  return stack.join("");
}
