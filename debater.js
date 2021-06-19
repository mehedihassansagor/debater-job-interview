// const i = 1;
// for (let i=1; i<5; i++) {
//     console.log(i,"Bangladesh");
// }

// array

// const myArray = [1,2,3,6]
//  myArray.pop()
// console.log(myArray)

// const myArray = [1,2,3,6]
//  myArray.push(8)
// console.log(myArray)

// const myArray = [1,2,3,6]
//  myArray.shift()
// console.log(myArray)

// const myArray = [1,2,3,6]
//  myArray.unshift()
// console.log(myArray)

// const myArray = [1,2,3,]
// const totalArray = [...myArray,7,8,9]
// console.log(totalArray)

// const myArray = [1,2,3,6]
//  console.log(myArray.length)


// const a = 1;
// const typeCheck = typeof(a)
// console.log(typeCheck)

// const a = "sagor";
// const typeCheck = typeof(a)
// console.log(typeCheck)

// const a = true;
// const typeCheck = typeof(a)
// console.log(typeCheck)

// const a=1
// const b = "3";
// const sum = a+ b;
// const typeCheck = typeof(sum)
// console.log(sum)
// console.log(typeCheck)

// const a = "mehedi hassan sagor".split('')
// const afterSplit = a.reverse();
// const reverseStrings = afterSplit.join('')
// console.log(reverseStrings)

// function reverseStr(str){
//         const splitString = str.split('');
//         const reverseStrings = splitString.reverse();
//         const reverse = reverseStrings.join('');
//         return reverse;
// }

// const reverseStrings = reverseStr("hello")
// console.log(reverseStrings)

// function numberOfWord(str) {
//     const totalWord = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str.charAt(i) == ' '){
//            return totalWord +1;
//           }
//         }
      
// }

// const numberOfWords= numberOfWord("mehedi hassan sagor") 
// console.log(numberOfWords)


const a = "mehdi hassan sagor i am a student of cse"
let count = 1;

for (let i = 0; i < a.length; i++) {
  // console.log(i)
  if(a.charAt(i) == ' '){
    count ++;
  }
}
console.log(count)


