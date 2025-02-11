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
/** ZC-TASK: */
/** Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
MASALAN: celsiusToFahrenheit(0) return 32 */

// my version
const celsius = (num: number) =>
{
  const celsiusToFahrenheit = (num * 1.8 + 32);
  
  return celsiusToFahrenheit;
}
console.log("Celsius in Fahrenheit:", celsius(0));
console.log("Celsius in Fahrenheit:", celsius(23));

console.log("-------- // --------");

// Modified version via ChatGPT
const celsiusToFahrenheit = (num: number): number => {
  return (num * 1.8) + 32;
};

console.log("Celsius in Fahrenheit:", celsiusToFahrenheit(0)); // 32
console.log("Celsius in Fahrenheit:", celsiusToFahrenheit(23)); // 212




/* ###########################    ###############################   ######################*/
/** ZA-TASK: */
/**Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}] */


// // ascending order
// const sortByAgeDescendingAsc = (arr: { age: number }[]): { age: number }[] => {
//   return arr.sort((a, b) => a.age - b.age);
// };

// // descending order
// const sortByAgeDescendingDesc = (arr: { age: number }[]): { age: number }[] => {
//   return arr.sort((a, b) => b.age - a.age);
// };

// console.log("ascending order:")
// console.log(sortByAgeDescendingAsc([{ age: 23 }, { age: 21 }, { age: 13 }])); 
// // return [{ age: 23 }, { age: 21 }, { age: 13 }]

// console.log("descending order:")
// console.log(sortByAgeDescendingDesc([{ age: 40 }, { age: 20 }, { age: 30 }])); 
// // return [{ age: 40 }, { age: 30 }, { age: 20 }]





/* ###########################    ###############################   ######################*/
/** Z-TASK: */
/** Shunday function yozing. Bu function sonlardan iborat array
qabul qilsin. Function'ning vazifasi array tarkibidagi juft
sonlarni topib ularni yig'disini qaytarsin.

MASALAN:
sumEvens([1, 2, 3]); return 2;
sumEvens([1, 2, 3, 2]); return 4;

Yuqoridagi misolda, bizning funktsiya
berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda. */

// const sumEvens = (arr: number[]): number => {
//   let sum = 0;
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
  
//   return sum;
// };

// console.log(sumEvens([1, 2, 3])); // 2
// console.log(sumEvens([1, 2, 3, 2])); // 4
// console.log(sumEvens([4, 5, 6, 7, 8])); // 18








/* ###########################    ###############################   ######################*/
/** Y-TASK: */
/** Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
 MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3] */

// const findIntersection = (arr1: number[], arr2: number[]): number[] => {
//   let result: number[] = [];

//   for (let i = 0; i < arr1.length; i++) {  
//     if (arr2.includes(arr1[i])) {  
//       result.push(arr1[i]);
//     }
//   }

//   return result; 
// };

// console.log(findIntersection([4, 5, 6, 7], [7, 6, 5, 8]));
// console.log(findIntersection([10, 20, 30], [40, 50, 60]));
// console.log(findIntersection([1, 1, 2, 2], [2, 2, 3, 3]));






/* ###########################    ###############################   ######################*/
/** X-TASK: */
/** Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
 MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2 */

// const countOccurrences = (obj: Record<string, unknown>, targetKey: string): number => {
//   let count = 0;
//   for (let key in obj) {
//     if (key === targetKey) {
//       count++;
//     }

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       count += countOccurrences(obj[key] as Record<string, unknown>, targetKey);
//     }
//   }
//   return count; 
// };
// console.log(countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model'));
// console.log(countOccurrences({ a: { b: { c: 'd' }, e: 'f' }, g: { c: 'c' } }, 'c'));
// console.log(countOccurrences({}, 'test'));






/* ###########################    ###############################   ######################*/
/** W-TASK: */
/**Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]] */

// const chunkArray = (arr: number[], size: number) =>
// {
//   const result: number[][] = [];
  
//   for (let i = 0; i < arr.length; i += size) 
//   {    
//     const chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }

//   return result;
// }
// console.log("W Task result:")
// console.log(chunkArray([1, 4, 6, 3, 6, 3, 9, 0, 8], 2));


/* ###########################    ###############################   ######################*/
/** V-TASK: */
// Shunday function yozing, uni string parametri bo'lsin. Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida qatnashgan harflar necha marotaba takrorlangini bilan object sifatida qaytarilmoqda.

// const countChars = (word: string) =>
// {
//   const wordWithoutSpaces = word.replace(/\s/g, ""); // Probellarni olib tashlash
//   const wordSplit = wordWithoutSpaces.split("");
//    const charCount: { [key: string]: number } = {};

//   wordSplit.forEach((char) => {
//     if (charCount[char]) {
//       charCount[char] += 1;
//     } else {
//       charCount[char] = 1;
//     }
//   });

//   return charCount;
// };
// console.log("V Task result:")
// console.log(countChars("hello"));
// console.log(countChars("Devex academy"));





/* ###########################    ###############################   ######################*/
/** U-TASK: */
// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;


// const sumOdds = (number: number) => {
//   let count = 0;

//   for (let i = 0; i <= number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(101)); 





/* ###########################    ###############################   ######################*/
/** T-TASK: */
/** Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin. Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];
Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda. */

// const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
//   const mergedArray = arr1.concat(arr2);

//   const sortedArray = mergedArray.sort((a, b) => a - b);
//   return sortedArray;
// };

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 
// [0, 3, 4, 4, 6, 30, 31]







/* ###########################    ###############################   ######################*/
/** S-TASK: */
/**Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 */

// const missingNumber = (nums: number[]): number => {
//     const n = nums.length; 
//     const expectedSum = (n * (n + 1)) / 2;

//     const actualSum = nums.reduce((total, num) => total + num, 0);

//     return expectedSum - actualSum;
// };

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1])); // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8




/* ###########################    ###############################   ######################*/
/** R-TASK: */
/**Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */

// const calculate = (input: string): number => {
//     const parts = input.split(" ");
//     let result = 0;

//     for (let i = 0; i < parts.length; i++) {
//         if (!isNaN(Number(parts[i]))) { 
//             result += Number(parts[i]); 
//     }
//   }

//     return result; 
// };

// console.log(calculate("1 + 3")); 
// console.log(calculate("10 + 20"));
// console.log(calculate("5 + 5 + 5"));



/* ###########################    ###############################   ######################*/
/** Q-TASK: */
/** Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false */

//  const hasProperty = (obj: Record<string, any>, key: string): boolean => {
//     return key in obj;
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));





/* ###########################    ###############################   ######################*/
/** P-TASK: */
/** Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]] */

// function objectToArray(obj: { [key: string]: any }): any[] {
//   const result: any[] = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push([key, obj[key]]);
//     }
//   }
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 })); // [['a', 10], ['b', 20]]





/* ###########################    ###############################   ######################*/
/** O-TASK: */
/** Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45 */

// const calculateSumOfNumbers = (arr: any[]) => {
//   const checkMixedArray = arr.filter(element => typeof element === 'number');
//   let sumOfNumbers = 0;
//   for (let num of checkMixedArray) {
//     sumOfNumbers += num;
//   }
//   return sumOfNumbers;  
// }
// console.log(calculateSumOfNumbers([2, "10", "Uzbekistan", 20, 14]));


/* ###########################    ###############################   ######################*/
/**N-TASK */
/** Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false; */

// const palindromWord = (input: string): boolean => {
//     const palindromCheck = input.split('').reverse().join('');
//     if(input === palindromCheck) {
//       return true
//       } else {
//         return false
//       };

// };
// console.log(palindromWord("google"));
// console.log(palindromWord("dad"));


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