let start: number = 1;
let end: number = 100;

// Membuat array dari 1 s/d 100
const initialArr = (start: number, end: number): number[] => {
  let arrNumber: number[] = [];

  for (let val: number = start; val <= end; val++) {
    // console.log("lihat hasil", val);
    arrNumber.push(val);
  }

  return arrNumber;
};
