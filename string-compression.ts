function compress(chars: string[]): number {
 
    let i: number = 0;
    let res: number = 0;
    while (i < chars.length) {
        let groupLength: number = 1;
        while (i + groupLength < chars.length && chars[i + groupLength] === chars[i]) {
            groupLength++;
        }
        chars[res++] = chars[i];
        if (groupLength > 1) {
            for (let c of groupLength.toString()) {
                chars[res++] = c;
            }
        }
        i += groupLength;
    }
    return res;

}

let input = ["a", "b", "c"];
console.log(compress(input));
// console.log(input);
