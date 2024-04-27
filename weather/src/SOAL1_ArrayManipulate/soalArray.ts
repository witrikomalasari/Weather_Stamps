let start: number = 1;
let end: number = 100;

// Membuat array dari 1 s/d 100
export const initialArr = (start: number, end: number): number[] => {
  let arrNumber: number[] = [];

  for (let val: number = start; val <= end; val++) {
    // console.log("lihat hasil", val);
    arrNumber.push(val);
  }
  return arrNumber;
};

// Reverse Array
export const reversArray = (arr: number[]) => {
  //   console.log("isi array awalsort", arr);
  let reversResult: number[] = arr.reverse();
  //   console.log("reverse", reversResult);
  return reversResult;
};

// mencari bilanganPrima
const syaratBilPrima = (num: number) => {
  if (num <= 1) return false; // 1. bukan bernilai 1
  if (num <= 3) return true; // 2. untuk mengambil angka 2 dan 3 dimana nilai tersebut adalah bil prima

  if (num % 2 === 0 || num % 3 === 0) return false; // 2.bilangan genap/habis dibagi/modulus

  let loopResult = [];

  for (let i = 5; i * i <= num; i += 6) {
    //  25,35,49,55,65,77,91,95
    loopResult.push(i);
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const BilanganPrima = (arrReverse: number[]) => {
  //   console.log("bukan bilangan primes", arrReverse);
  let notPrimes: number[] = [];

  for (let i = 0; i < arrReverse.length; i++) {
    if (syaratBilPrima(arrReverse[i])) {
      notPrimes.push(i);
    }
  }

  return notPrimes;
};

// 1. Jangan print angka Bilangan Prima
const bukanBilanganPrima = (arrPrimes: number[], arr: number[]) => {
  arr = arr.filter(val => !arrPrimes.includes(val));
  //   console.log("ber", arr);
  return arr;
};

// const resultArr = initialArr(start, end); // kirim nilai awal dan batas nilai ke function initialArr
// const resultRevers = reversArray(resultArr);
// const primes = BilanganPrima(resultRevers);
// const excludePrimes = bukanBilanganPrima(primes, resultRevers);

// onsole.group('Mini Test PT. STAMPINDO ');
// console.log('check nilai array awal', resultArr);
// console.log('reverse array awal', resultRevers); // cara kirim/lempar hasil return function initialArr yaitu array awal 1-100
// console.log('this is primes', primes);
// console.log('eliminate primes', excludePrimes);
// console.groupEnd();
