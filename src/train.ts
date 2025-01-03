/* Project standards:
  - Logging standards,
  - Naming standards:
    * function, method, variable => CAMEL
    * class => PASCAL
    * folder, file => KEBAB
    * css => SNAKE
  - Error handlings
*/

/** Most common utilize API types:
      Traditional API
      Rest API
      GraphQL API
 */

/** 
  Traditional Frontend Development  => BSSR => EJS
  Modern FD                         => SPA  => REACT
*/

/** Validations:
  Frontend validatiom;
  Backend validation;
  Database valiadtion
 */

  
/* ###########################    ###############################   ######################*/
/**N-TASK */
/** Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false; */

const palindromWord = (input: string): boolean => {
    const palindromCheck = input.split('').reverse().join('');
    if(input === palindromCheck) {
      return true
      } else {
        return false
      };

};
console.log(palindromWord("google"));
console.log(palindromWord("dad"));


/* ###########################    ###############################   ######################*/

/** M TASK */
/** Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]; */


// const getSquareNumbers = (arr: number[]): { number: number; square: number }[] => {
//   const result = []; // Natijani saqlash uchun bo'sh array
//   for (let i = 0; i < arr.length; i++) {
//     const number = arr[i];
//     const square = number * number;
//     result.push({ number: number, square: square }); // Har bir raqam va kvadratini object sifatida qo'shamiz
//   }
//   return result; // Hosil bo'lgan arrayni qaytaramiz
// };

// console.log(getSquareNumbers([1, 2, 3])); 
// // Natija: [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }]


/* ###########################    ###############################   ######################*/

/** L-TASK */

/** Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc"; */

// const reverseSentence = (sentence: string): string => {
//   return sentence
//     .split(' ') // So‘zlarga ajratish
//     .map(word => word.split('').reverse().join('')) // Har bir so‘zni chappasiga yozish
//     .join(' '); // So‘zlarni yana bo‘sh joy bilan birlashtirish
// };

// console.log(reverseSentence("we like coding")); // "ew ekil gnidoc"



/* ###########################    ###############################   ######################*/

/** K-TASK:  */


  // const countVowels = (text: string): number => {
  //   const vowels = 'aeiou'; 
  //   let count = 0; 
  
  //   for (let char of text.toLowerCase()) { 
  //     if (vowels.includes(char)) { 
  //       count++; 
  //     }
  //   }
  
  //   return count;
  // };
  
  // console.log(countVowels("string"));
  // console.log(countVowels("TypeScript"));
  


/* ###########################    ###############################   ######################*/

/* J-TASK: */

/** Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan" */

// const findLongestWord = (sentence: string): string => {
//   const words = sentence.split(' ');
//   let longestWord = '';

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord("I come from Uzbekistan")); // "Uzbekistan"




/* ###########################    ###############################   ######################*/

/* I Task */

/* Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4 */

// const majorityElement = (arr: number[]): number | undefined => {
//   const countMap: { [key: number]: number } = {}; 

//   for (let num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1; 
//   }

//   let maxCount = 0; 
//   let majorityNum: number | undefined = undefined; 

//   for (let num in countMap) {
//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majorityNum = Number(num); 
//     }
//   }
//   return majorityNum; 
// };



// const majorityElement2 = (arr: number[]): number | undefined => {
//   const findMajorityElement2 = arr.sort((a, b) => a-b);
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (findMajorityElement2[i] === findMajorityElement2[i+1]) {
//       return findMajorityElement2[i];
//     };
//   };
//   return undefined;
// };
// console.log(majorityElement([2, 5, 6, 2, 5, 6, 5])); // ChatGPT bilan yechilgan
// console.log(majorityElement2([2, 5, 6, 2, 5, 6, 5])); // O'zim mustaqil yozganim :')



/* ###########################    ###############################   ######################*/

/* H-2 Task */

/* Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141" */

// const getDigits = (text: string) => {
//   const newGetDigits = text.split('').filter((char) => !isNaN(Number(char))).join('');
//   return newGetDigits;
// }; 

// console.log(getDigits("m14i1t"));

// console.log(getDigits("hb828b0d2"));


/* ###########################    ###############################   ######################*/

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