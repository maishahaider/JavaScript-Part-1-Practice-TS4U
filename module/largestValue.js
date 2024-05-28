export const findLargestNumber = (num1, num2) => {
  if (num1 == num2) {
    return "The numbers are equal, comparison not possible";
  } else if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else {
    return `${num2} is greater than ${num1}`;
  }
};
// console.log(findLargestNumber(20, 30));


const name="Maisha"
function SNT(){
    return `${name} will give SNT`
}

export{name,SNT}