//Write a function that take in array of numbers.
let arr=[3,5,9,2,6];
function array(arr){
    for (let i = 0;i < arr.length;i++) {
     console.log(arr[i])
    }
}
array(arr);

//Write a function that takes an array of strings as input and returns.
//A new array with only the strings that have a length greater than 5.
function array(arr4){
    let emptyArray =[];
    for (let i = 0; i < arr4.length; i++) {
        if(arr4[i] > num){
            emptyArray.push(arr4[i])
        }
       return emptyArray 
    }
    let num=[2,4,5,6,8]
    console.log(array(num));


    
}

//Write function that take two arrays as input and returns a new array with.
//The element that are common to both arrays
function arrays(arr0,arr1) {
    let emptyArray=[];
    for (let i = 0; i < arr0.length; i++) 
    for (let d = 0;d < arr1.length; d++) 
    
        if(arr0[i] === arr1[d]){
            emptyArray.push(arr1[d]) 
        }
    
    return emptyArray
}
let arr0=[3,9,6,7,2];
let arr1=[9,12,56,6,7];
console.log("common",arrays(arr0,arr1))


//Write a function that takes an array of numbers as input and.
//and return a new array with only even numbers.
let arr2=[2,6,4,8,10,7,9];
let emptyArray=[]
function array(arr2){
    let emptyArray=[]
    for (let i = 0; i < arr2.length; i++) {
        if(arr2[i]%2===0){
      emptyArray.push(arr2[i])
        }
    }
    return emptyArray
}
console.log(array(arr2));