//Access by id
console.log(document.getElementById("thisOne"));

//Access by class name
// document.getElementsByClassName("class_name") ->It returns an array
console.log(document.getElementsByClassName("okay")[0]); //Accessing the first div with class name okay

//We can also store  it in a array:
const arr=document.getElementsByClassName("okay");
console.log(arr[0]);

//Access through name (ex: input tag has name attribute)
// const a= document.getElementsByName("email");
// console.log(a);

//Access using tag name
const b=document.getElementsByTagName("span");
console.log(b);

//Manipulate <span> tag:

//minpulate the text
// b[0].textContent="newText";  

//mainpulate the text between <span></span> tag
// b[0].innerText="newinnerText"; 

//rewrite the <span></span> (html) tag:
// b[0].innerHTML=`<span class="newclass">newSpan</span>`

// Manipulate Css properties:
b[0].style.backgroundColor="grey";
b[0].style.color="#fff";
b[0].style.font="100 1.5rem 'Roboto'";
console.log(b[0]);