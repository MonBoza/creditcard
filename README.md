Describe: function();

Test: "It will identify every other number in the credit card sequence and map into new array"
Code: everyOtherNumber("element");
let number = "0998445533334452"
let numArr = number.split("")
Expected Output: 8 numbers returned

Test:"It will pull and store first index in array and every other number"
code:let array = [4,3,5,5,6,6,6,6,8]
let NewArray = [];
for (let i = 0; i < array.length; i += 2){
  NewArray.push(array[i]);
}
Expected output: [4, 5, 6, 6, 8]

Test: "It will double every other number in NewArray"
code: let array = [4,3,5,5,6,6,6,6,8]
let NewArray = [];
for (let i = 1; i < numArray.length; i += 2){
  doubledNumArray.push(numArray[i] * 2);
}


Test:" It will split double digit numbers in array and add them together"
code:for (i=0; i < doubledNumArr.length;  i +=1)
      if(doubledNumArr[i]>9) 
      doubledNumArr[i].toString()
       let sum = 0;
        for (let index = 0; index < numString.length; index +=1) {
          sum += parseInt(numString[index]);
        }
        newArray.push(sum);
        } else {
        newArray.push(numArrayDoubled[i]);
      }

Expected Output: doubledNumArr [single digit numbers]

Test: "It will join both arrays"
code: rejoinArray = doubleNumArr.concat(newArray);
Expected Output: [16 digits]

Test: "It will add all the numbers in array together"
code: for (let i = 0; i < numArrayDoubled.length; i += 1){
  if (numArrayDoubled[i] > 9)
    numArrayDoubled = numArrayDoubled.reduce((a,b) => a + b);
}
Expected Output: 50


let number = "4102080860435620";
let numArray = number.split("");
let numArrayDoubled = [];

function double(element) {
  for (let index = 1; index < numArray.length; index += 2) {
    numArrayDoubled.push(numArray[index] * 2);
  }
}

double(); // Call the function

console.log(numArrayDoubled);


result : numArrayDoubled = [2, 4, 16, 16, 0, 6, 12, 0]


let newArray = [];

for (let i = 0; i < numArrayDoubled; i+=1) {
  if (numArrayDoubled[i] > 9) {
    let numString = numArrayDoubled[i].toString();
    let sum = 0;
    for (let j = 0; j < numString.length; j+=1) {
      sum += parseInt(numString[j]);
    }
    newArray.push(sum);
  } else {
    newArray.push(numArrayDoubled[i]);
  }
}

console.log(newArray);

result : [2, 4, 7, 7, 0, 6, 3, 0]