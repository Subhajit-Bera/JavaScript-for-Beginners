// Function Syntax:
// function function_name(parameter1,parameter2,.....){
    // code to be executed
// }

//This is a function which generate bill
function bill(name,price){
    console.log(name+" you have to pay Rs:"+price);
    console.log("Thank you for visiting "+name);
}
  


//Call the function bill
bill("Subha",10000);

// output:
// Subha you have to pay Rs:10000
// Thank you for visiting Subha


//Function that retuns a value
function sum(a,b,c){
    return a+b+c;
}

//Calling the function
let ans=sum(2,2,2);
console.log(ans);


//Function with default parameters
function multiply(x,y=2){
    return x*y;
}

//Calling Function :
let retVal=multiply(6,6);
console.log(retVal);
//Op:36




// If we do not pass the value of y, in that case default value of parameter y will be taken
let val=multiply(6);
console.log(val);
//Op:12  (default value of y is 2)