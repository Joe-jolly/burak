/* H-2 Task */

/* Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141" */

const getDigits = (text: string) => {
  const newGetDigits = text.split('').filter((char) => !isNaN(Number(char))).join('');
  return newGetDigits;
}; 

console.log(getDigits("m14i1t"));

console.log(getDigits("hb828b0d2"));

/* H Task */

/* Raqamlardan iborat arrayni argument sifatida qabul qiladigan
function tuzing. Ushbu function faqatgina positive sonlarni olib
string holatida return qilsin.
MASALAN: getPositive([1, -4, 2]) return qiladi "12". */

// function getPositive(arr: number[]): string {
//     let argument = "";
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         argument += arr[i];
//       }
//     }
//     return argument;
//   }
  
//   console.log(getPositive([2, 3, -12, -21, 8])); 