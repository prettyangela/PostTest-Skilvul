// Basic Coding
// Note: Jawab dengan 2 versi, yaitu menggunakan for dan built-in function (map / filter / find / dll)

// 1. Linear Search
// Mencari data pada array
// Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
// Kembalikan dalam bentuk number
// Kembalikan undefined jika tidak dikembalikan

// Using For
function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return number;
    }
  }
  return 'undefined';
}

let array = [8, 3, 9, 2, 5];
let number = 3;
console.log(findNumber(array, number));

// Using Find

function findNum(arr, num) {
  return arr.find((elemen) => elemen === num);
}

let arr = [2, 6, 7, 5, 1];
let num = 9;
console.log(findNum(arr, num));

// 2. Fizz Buzz Array
// Mencari mengubah angka fizz buzz
// Buat fungsi yang menerima parameter data array
// Kembalikan dalam bentuk boolean

// Using For

function fizzBuzzArrayWithFor(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 3 === 0 && data[i] % 5 === 0) {
      result.push('fizz buzz');
    } else if (data[i] % 3 === 0) {
      result.push('fizz');
    } else if (data[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(fizzBuzzArrayWithFor([8, 3, 9, 2, 5]));

// Return Boolean Using For

function fizzBuzzBooleanWithFors(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 3 === 0 && data[i] % 5 === 0) {
      result.push(true);
    } else if (data[i] % 3 === 0) {
      result.push(false);
    } else if (data[i] % 5 === 0) {
      result.push(true);
    } else {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(fizzBuzzBooleanWithFors([8, 3, 9, 2, 5]));

// Using Map

function fizzBuzzArrayWithMap(data) {
  return data.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizz buzz';
    } else if (number % 3 === 0) {
      return 'fizz';
    } else if (number % 5 === 0) {
      return 'buzz';
    } else {
      return number;
    }
  });
}

console.log(fizzBuzzArrayWithMap([8, 3, 9, 2, 5]));

// Return Boolean Using Map

function fizzBuzzBooleanWithMap(data) {
  return data.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return true;
    } else if (number % 3 === 0) {
      return false;
    } else if (number % 5 === 0) {
      return true;
    } else {
      return number;
    }
  });
}

console.log(fizzBuzzBooleanWithMap([8, 3, 9, 2, 5]));
