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


// const a = "mehdi hassan sagor i am a student of cse"
// let count = 1;

// for (let i = 0; i < a.length; i++) {
//   // console.log(i)
//   if(a.charAt(i) == ' '){
//     count ++;
//   }
// }
// console.log(count)

// const str = "nazrul shuvo mehedi  hassan sagor"
// let count = 1;
// for (let i = 0; i < str.length; i++) {
//   if(str.charAt(i) == ' '){
//     count ++;
//   }
//
// }
// console.log(count)

// const a = [12, 34, 45]
// console.log(Math.min(...a))


// var a = [12, 34, 45,67,89999]
// let max = a[0];

// for (let i = 0; i <a.length; i++) {
//   if (a[i] < max){
//     max = a[i]
//   }
// }
// console.log(max)

// let a = "i love teaching".split(" ")
// let maxWord = a[0];
// console.log(a)

// for(let i = 1; i < a.length; i++)
// if(a[i]>maxWord){
//   maxWord = a[i];
// }
// console.log(maxWord)

//kilometer to meter
// function kilometerToMeter( kilometer ){
//   //we know 1 km = 1000 m
//   var meter = kilometer*1000;
//   if( kilometer < 0 ){
//   var negativeMeter = "distance cannot be negative"
//   return negativeMeter;
//   }
//   else
//   return meter;
//   }
//   var finalMeterIs = kilometerToMeter( 6);
//   console.log(finalMeterIs);
  //budget calculator
  // function budgetCalculator(watch, phone,laptop ){
  // var totalPrice = 0;
  // if(watch * phone * laptop < 0){ //negative value here
  // var forNegative = "element number cant be negative";
  // return forNegative;
  // }
  // else
  // var watchPrice = watch*50;
  // var phonePrice = phone*100;
  // var laptopPrice = laptop*500;
  // var totalPrice = watchPrice + phonePrice + laptopPrice;
  // return totalPrice;
  // }
  // var finalPrice = budgetCalculator(2,2,2);
  // console.log(finalPrice);
  //hotel cost
   
  // function hotelCost( day ){
  // totalCost = 0;
  // if( day < 0){
  // var forNegativeDay = "day cant be negative"; //negative value here
  // return forNegativeDay;
  // }
  // if(day <= 10){
  // var first10 = day*100;
  // var totalCost = totalCost+first10;
  // }
  // else if(day <= 20){
  // var firstPart = 10*100;
  // var rememberDay = day - 10;
  // var second10 = rememberDay*80;
  // var totalCost = firstPart + second10;
  // }
  // else{
  // var firstPart = 10*100;
  // var secondPart = 10*80;
  // var rememberDay = day - 20;
  // var thirdPart = rememberDay*50;
  // var totalCost = firstPart + secondPart + thirdPart;
  // }
  // return totalCost;
  // }
  // var finalRent = hotelCost(40);
  // console.log(finalRent);

  // //large name
  // function megaFriend (nameList){
  // var nameLarge = 0;
  // for (var i = 0; i < nameList.length; i++){
  // if (nameList[i].length > nameLarge) {
  // var nameLarge = nameList[i].length;
  // var largest = nameList [i];
  // }
  // }
  // return largest;
  // }
  // var largeName = megaFriend(["mehedi", "hassan", "nur islam","sobi run nesa","kajol rekha"]);
  // console.log(largeName );


//   let number = [1,2,3,4,5,3,2,3,4,5]

// var uniqueNumber = []
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   var index = uniqueNumber.indexOf(element)
//  if (index === -1) {
//    uniqueNumber.push(element)
//  }
// }
// console.log(uniqueNumber)

// var speech = "i am a laday         killer man"

// var count = 0;
// for (let i = 0; i < speech.length; i++) {
//   const element = speech[i];
//   if (element == " " && speech[i-1] != " ") {
//     count++;
//   }
  
// }
// count++;
// console.log(count)


// var name = "sagor".split("")
// var reverseStrings = name.reverse()

// var result = reverseStrings.join("")
// console.log(result)


// var number = 1;
// var facto = 1;
// for(var i = 1, j = 0; i <= number;i++) {
//   facto = facto*i
//   console.log(i,facto)
// }

// prime number 

// function prime(number) {

// var count = 0;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     count++;
//     break;
//   }
// }
// if (count == 0) {
//   console.log("prime number")
// }
// else
// console.log("not prime number")

// }
// var findPrime = prime(78)

// var number = [1,3,4,5]
// number.push(8)
// console.log(number)

// let county = [1,3,4,5,4,1,2,3]

// var uniqueCountry = []

// for (let i = 0; i < country.length; i++) {
//   var element = country[i];
//   var index = uniqueCountry.indexOf(element)
//   if(index === -1){
//     uniqueCountry.push(element)
//   }
// }
// console.log(uniqueCountry)

//   let number = [1,2,3,4,5,3,2,3,4,5]

// var uniqueNumber = []
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   var index = uniqueNumber.indexOf(element)
//  if (index === -1) {
//    uniqueNumber.push(element)
//  }
// }
// console.log(uniqueNumber)

// let country = ['ban','can','yan','man','ban','man']

// let uniqueCountry = []
// for (let i = 0; i < country.length; i++) {
//   const element = country[i];
//   let index = uniqueCountry.indexOf(element)
//   if (index === -1) {
//     uniqueCountry.push(element)
//   }
// }
// console.log(uniqueCountry)

// let number = [4,5,6,7,8,9,8,7,6,5,6,7]

// let uniqueNumber = []
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   let index = uniqueNumber.indexOf(element)
//   if (index === -1){
//     uniqueNumber.push(element)
//   }
  
// }
// console.log(uniqueNumber)

// let number = 8

// let count = 0;
// for(let i = 2; i <number; i++) {
//   if(number % i == 0){
//     count++;
//     break;
//   }
  
// }
// if(count == 0){
//   console.log("not prime")
// }
// else
// // console.log("prime nmber")

// function prime(number) {

//   var count = 0;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       count++;
//       break;
//     }
//   }
//   if (count == 0) {
//     console.log("prime number")
//   }
//   else
//   console.log("not prime number")
  
//   }
//   var findPrime = prime(78)

let number = 3;

var count = 0;

for(let i = 0; i < number; i++) {
  if(number % i == 0) {
    count ++;
    break;
  }
}
if(count == 0) {
  console.log("prime number")
}
else
console.log("not")