// let heading = document.firstElementChild.lastElementChild.firstElementChild;
// heading.innerHTML="Good Bye";
// heading.style.color="red";


//checkbox become checked after using .click()
document.querySelector("input").click();

//Manipulate color of 2nd list item
document.getElementsByTagName("li")[1].style.color="purple";

//Manipulate background color of button
document.getElementsByTagName("button")[0].style.backgroundColor="yellow";

//Manipulate text color of 2nd button
document.getElementsByClassName("btn")[1].style.color="green";


//Manipulate using Id
let title=document.getElementById("title");
title.innerHTML="What's Up";
title.style.color="Blue";


//using query Selector changing the color of 1st list item
document.querySelector(".list a").style.color="orange";


//using query Selector changing the color of 3rd list item
document.querySelectorAll(".list")[2].style.color="pink";
