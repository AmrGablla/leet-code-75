function isSubsequence(s: string, t: string): boolean {
  if (s === t) return true;
  let nextIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[nextIndex]) nextIndex++;
    if (nextIndex === s.length) return true;
  }

  return false;
}

console.log(isSubsequence("abc", "ahbgdc"));
