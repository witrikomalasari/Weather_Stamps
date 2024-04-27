// let start: number = 1;
// let end: number = 100;

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

// const resultArr = initialArr(start, end); // kirim nilai awal dan batas nilai ke function initialArr
// const resultRevers = reversArray(resultArr);

// onsole.group('Mini Test PT. STAMPINDO ');
// console.log('check nilai array awal', resultArr);
// console.log('reverse array awal', resultRevers); // cara kirim/lempar hasil return function initialArr yaitu array awal 1-100
// console.groupEnd();
