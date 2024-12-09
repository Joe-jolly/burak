/* H Task */

/* Raqamlardan iborat arrayni argument sifatida qabul qiladigan
function tuzing. Ushbu function faqatgina positive sonlarni olib
string holatida return qilsin.
MASALAN: getPositive([1, -4, 2]) return qiladi "12". */

function getPositive(arr) {
    let argument = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        argument += arr[i];
      }
    }
    return argument;
  }
  
  console.log(getPositive([2, 3, -12, -21, 8])); 