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

/* ###########################    ###############################   ######################*/

/* I Task */

/* Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4 */

const majorityElement = (arr: number[]): number | undefined => {
  const countMap: { [key: number]: number } = {}; 

  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1; 
  }

  let maxCount = 0; 
  let majorityNum: number | undefined = undefined; 

  for (let num in countMap) {
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      majorityNum = Number(num); 
    }
  }
  return majorityNum; 
};



const majorityElement2 = (arr: number[]): number | undefined => {
  const findMajorityElement2 = arr.sort((a, b) => a-b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (findMajorityElement2[i] === findMajorityElement2[i+1]) {
      return findMajorityElement2[i];
    };
  };
  return undefined;
};
console.log(majorityElement([2, 5, 6, 2, 5, 6, 5])); // ChatGPT bilan yechilgan
console.log(majorityElement2([2, 5, 6, 2, 5, 6, 5])); // O'zim mustaqil yozganim :')



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