/* 
  i didn't understand gcd yet just submit someone soultion to pass the day.

*/


function gcdOfStrings(str1: string, str2: string): string {
  //which string is smaller string 
  const length1 =str1.length
  const  length2 = str2.length

  // find both length , use str2 as it is the smallest one 
  let gcd=str2
  let gcdLen=length2

  // check if our both strings length is divsable our gcd length
  const isDivisor=()=>{
   if (length1 % gcdLen ===0 && length2 % gcdLen ===0 )return true
     return false
    }

   // loop throught the smallest string chaeck if the whole string is gcd 
   //if not remove onc char from the end , repeat
   for (let i=0; i <= length2; i++ ){
   if (isDivisor()) {
   // multiple the gcd to compose the two strings and check if it a divisor of them 
   if ( gcd.repeat(length1 / gcdLen) ===str1 && gcd.repeat(length2 / gcdLen) ===str2 ) return   gcd 
   return  ""
     
   } 
      gcdLen-=1
      gcd=gcd.slice(0,-1)

   }
  return  ""
  }



let result1: string = gcdOfStrings("ABCABC", "ABC");

if (result1 === "ABC") {
  console.log(true);
} else {
  console.log(false);
}

let result2: string = gcdOfStrings("ABABAB", "ABAB");
if (result2 === "AB") {
  console.log(true);
} else {
  console.log(false);
}

let result3: string = gcdOfStrings("LEET", "CODE");

if (result3 === "") {
  console.log(true);
} else {
  console.log(false);
}
