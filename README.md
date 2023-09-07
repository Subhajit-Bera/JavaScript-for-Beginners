# Java Script

JavaScript was invented by [Brendan Eich](https://www.google.com/search?rlz=1C1GCEA_enIN928IN928&sxsrf=ALiCzsa5HE3IOykriUDC74nW0l2ynA5NYQ:1662830393286&q=Brendan+Eich&stick=H4sIAAAAAAAAAONgVuLUz9U3MDE2KrZ8xGjCLfDyxz1hKe1Ja05eY1Tl4grOyC93zSvJLKkUEudig7J4pbi5ELp4FrHyOBWl5qUk5im4ZiZnAAD6oLmNUwAAAA&sa=X&ved=2ahUKEwjnlKf33Yr6AhXD1TgGHbWlCnwQzIcDKAB6BAgEEAE)
in 1995.

## What is JavaScript?
JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows client-side scripts to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

If we want to perform any sequence of steps,calculation or implement any algorithm then we use JavaScript to do that.


## What can JavaScript do?

* JavaScript can add new HTML and change existing HTML from DOM.
* It can even react to any events (actions).[Response from server,keyboard press,mouse movement]
* It can also manage the AJAX requests (GET or POST request).
  **Ajax Request:** Asynchronous JavaScript And XML used to change the content of a page dynamically without reloading it.
* JavaScript can get and set cookies and use local storage.
## What Can’t In-Browser JavaScript Do?
* JavaScript cannot read or write to and from computer hard disk without user permissions. 
* The browser does not allow the JavaScript of any website to collect the AJAX information of the other website because it generates the error of the same origin policy.
* To summarize, JavaScript can only access the permitted resources but cannot access your documents on personal computers. 
These strict policies are developed to make sure that your computer is safe.

## What Makes JavaScript a Unique language?
* The most important thing that makes it a unique language is, it has a complete integration of HTML and CSS. They provide it with a lot of extra support.
* Also it provides the use of simple APIs (Application Programming Interface).
* It also supports the major modern browsers which are enabled by default. If you turn off the feature of JavaScript in the browser, you cannot access any website.

## WHAT IS DOM ?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, **programming languages can interact with the page.**

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

**For example**, the DOM specifies that the querySelectorAll method in this code snippet must return a list of all the <p> elements in the document

## Variables In Java Script 
**Java is a dynamic type language. Means we don’t need to specify the data type.
The set of types in the JavaScript language consists of primitive values and objects**.

**1.Primitive Values**(All types except objects define immutable values)
* Boolean type
* Null type
* Undefined type
* Number type
* BigInt type
* String type
* Symbol type
<br/>

### typeof and type conversion is explaind in source code.

[Code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/1_Variables.html)


## String In Java

A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

#### Defining a String:
We can define a string in JS by using “ ” and ‘ ‘  both.
When we need to use “ “  inside a string we define the string using ‘ ‘ and vice versa.
 ![1](https://user-images.githubusercontent.com/103336107/198845764-343fa5fb-dcb3-4e4a-b243-449cbed3ee3f.png)

#### String Template Literals :
![2](https://user-images.githubusercontent.com/103336107/198845785-3679d45a-f460-4a47-9e55-d1eb3d328cfe.png)

## String Functions

#### 1.Length function :
Length is an ECMAScript(ES1) feature.
Used to return the length of an object.
 
 ![3](https://user-images.githubusercontent.com/103336107/198845861-05dda06e-4df9-4f14-bf79-cc95c2c97fdb.png)

#### 2.indexOf(“”) and lastIndexOf(“”) :

![4](https://user-images.githubusercontent.com/103336107/198845931-e81a706b-ef40-450e-96f0-63ff3df2d216.png)

#### 3.slice(start index,end index):  perform slicing from starting index to end-1 index.
 ![5](https://user-images.githubusercontent.com/103336107/198846005-3bca2586-2dff-4e54-a940-5b2649595c51.png)

#### 4.substring(start index,end index): works the same as slice.
 ![6](https://user-images.githubusercontent.com/103336107/198846092-5b0b4758-ea2c-4443-ab6c-b05b614ef8aa.png)
 
ONLY DIFFERENCE BETWEEN slice AND substring IS: slice TAKES NEGATIVE VALUE ,WHERE substring DOESN’T ALLOW NEGATIVE VALUE. 

#### 5.substr(start index,length/no of character needed) : get the substrig from starting index to no of character (including start index->total 6)
 ![7](https://user-images.githubusercontent.com/103336107/198846156-fea0b4f2-49b2-44c0-b948-5a3134fffdfe.png)
 
#### 6.replace:
 ![8](https://user-images.githubusercontent.com/103336107/198846239-687c775a-ff32-41d2-b4f2-3e292f19002e.png)
#### 7.toUpperCase() & toLowerCase()
 ![10](https://user-images.githubusercontent.com/103336107/199079194-5997a4db-52c7-411b-8b61-ec6ab7860b3b.png)
 
#### 8.charAt() &  charAt()
![11](https://user-images.githubusercontent.com/103336107/199079428-7f31241c-6b29-4d49-8d7b-100e2cd6caea.png)
#### 9.concat(“new string”):
![12](https://user-images.githubusercontent.com/103336107/199079673-e33776c9-0592-4dd0-9f52-d2ba79b06f37.png)

#### 10.trim()
![13](https://user-images.githubusercontent.com/103336107/199080066-a9a31075-1796-4fa4-a02e-b61c0f37cdd1.png)

#### 11.Another way to access character from a string: 
![14](https://user-images.githubusercontent.com/103336107/199080292-c1a1ff7c-9180-42cd-ae8e-39c9ea1d4ecc.png)


[Code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/2_StringAndStringMethods.html)

## var vs let vs const

**var**: Scope of var is by default global.Doesn’t give any error if we declare a variable multiple times (same name). Which may lead to a problem in a program.
But if we declare the var inside any function, then its scope will remain under that function. 

**let** :  We can’t declare a variable multiple times using let.If we declare the var inside any function, then its scope will remain under that function.It is preferred to use let upon var.

**const** : Value can’t change once declared.

## Operators:

### == vs === 
**== only check values** <br/>
**=== check values as well as data type** <br/>
ex: <br/>
if(12=='12') -> true       <br/> 
if(12==='12') ->false   <br/>


## Conditional Statements
Conditional statements are used to perform different actions based on different conditions.
 
**In JavaScript we have the following conditional statements:**

* Use **if** to specify a block of code to be executed, if a specified condition is true.
* Use **else** to specify a block of code to be executed, if the same condition is false
* Use **else if** to specify a new condition to test, if the first condition is false
* Use **switch** to specify many alternative blocks of code to be executed
 
### if-else statement:
 ![20](https://user-images.githubusercontent.com/103336107/199290989-7fefabad-9fc0-4420-8e10-41cd2ae0ca62.png)

 ### switch-case statement:
  
 ![21](https://user-images.githubusercontent.com/103336107/199292767-e6660753-91f5-48e4-bd9c-dfb2afcd1195.png)
 
 ## Objects In JavaScript 
 The object class represents one of JavaScript’s data types. It is used to store data in the form of key and value pairs.
 
 ![15](https://user-images.githubusercontent.com/103336107/199081221-6c3bae7d-be66-4ca4-b2fe-136d32644626.png)

 In this above example we create object student manually.
 
 #### Accessing values of an Object:
 
 ![16](https://user-images.githubusercontent.com/103336107/199081714-977d90c8-55f6-4abb-ae22-95a85b95e5e6.png)

 **If we want to create a key using more than one word(using space inside a name) then we need to put the key name  inside a double quotation “ ”. Otherwise it will give an error.**
 
 ![17](https://user-images.githubusercontent.com/103336107/199082124-bda576dc-44b3-484d-b9dd-672fd9404ea5.png)
 
 **If we want to access the value of “student 2” then we have to use the 2nd method of accessing otherwise it will give syntax errors.**
 
![18](https://user-images.githubusercontent.com/103336107/199082382-1077bb5f-fcad-4f1a-be8e-c973d9532cf7.png)
 
 [code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/3_Objects.html)
 
 ## Array In JavaScript 
 Array is a special type of object.
In JavaScript arrays can contain various types of data together.
#### Defining An Array :
![19](https://user-images.githubusercontent.com/103336107/199082698-6dfc40fd-3934-4813-ab39-9c1419e16444.png)

 #### Creating array using new keyword:
 
 ![22](https://user-images.githubusercontent.com/103336107/199294512-a2e879b6-dd0a-4ef8-9370-87c6a9674e14.png)

 #### Creating An Empty Array of Specific number of Blocks(Array of Undefined elements):
 
 ![23](https://user-images.githubusercontent.com/103336107/199294734-81694de1-546c-43fa-89d7-6762f1073731.png)
 
 #### Length of An Array:
 ![24](https://user-images.githubusercontent.com/103336107/199294987-89387f8d-bb01-48dd-96ec-ea96fbf0acbf.png)

 #### Accessing Array Elements:
![25](https://user-images.githubusercontent.com/103336107/199295941-f8337514-f2c7-47c4-8d10-c07b99baf966.png)

 #### Add An Element In the End of Array:
 ![26](https://user-images.githubusercontent.com/103336107/199296043-6ecdabc6-23a8-4b6b-b455-b67e67b80595.png)
 
 
 
 

 #### Sort An Array:
 ![27](https://user-images.githubusercontent.com/103336107/199296168-d4811ad1-f773-4a79-926b-bc12455fad76.png)

[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/4_ArrayAndObjects.html)

## Functions in Java Script
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

* A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
* Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
* The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...)
* The code to be executed, by the function, is placed inside curly brackets: {}
#### Function Syntax :
![28](https://user-images.githubusercontent.com/103336107/199491703-da0887c8-3331-4ad8-9dab-07bcb55f89aa.png)

#### Creating a Function:
![29](https://user-images.githubusercontent.com/103336107/199536778-cd54e6d8-be5d-47ad-9d9a-adda703fb1e8.png)

**This function would get executed when someone calls or invokes it.**

#### Calling the Function:
![30](https://user-images.githubusercontent.com/103336107/199537222-06db9ece-5f9c-4024-9f81-d06507f637a0.png)

Function bill doesn’t return anything.

#### Lets see a function which returns some value :
![31](https://user-images.githubusercontent.com/103336107/199537917-8724b8db-0750-4596-b13c-79ec12371a99.png)

#### Default Parameters:
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
![32](https://user-images.githubusercontent.com/103336107/199538541-70b5f21c-0dc3-406b-9bf1-1a68bca7000a.png)

**If we do not pass the value of y, in that case the default value of parameter y will be taken.**
![33](https://user-images.githubusercontent.com/103336107/199538919-f48bcc86-e240-4c94-b94f-b8fa52aeff77.png)

[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/5_Functions.js)


## Alert, Prompt, Confirm 

### alert() : 
* The alert() method displays an alert box with a specified message and an OK button.
* It is often used to make sure information comes through to the user. 
* The alert box takes the focus away from the current window and forces the browser and forces the browser to read the message. 
* Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed. 
* alert() doesn’t return anything.

#### Syntax:
![34](https://user-images.githubusercontent.com/103336107/199799147-7641e347-9c4b-4951-a13a-19175e9e49b5.png)

#### Output:
![36](https://user-images.githubusercontent.com/103336107/200036551-7654a7c6-f20e-473d-9f2d-cebcd4b24ac5.png)

### prompt():
* The prompt() method displays a dialog box that prompts the user for input.
* When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.
* The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.
* Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.

#### Syntax:
![35](https://user-images.githubusercontent.com/103336107/199799850-dcf0c205-fca0-471a-a33b-c546870731eb.png)

#### Output:

![37](https://user-images.githubusercontent.com/103336107/200036862-08622b01-1d75-4152-bef5-5d359225bac8.png)

### prompt() with default argument:
Here Guest is the default argument. 

![38](https://user-images.githubusercontent.com/103336107/200037064-15eb78c7-4b46-4b9e-817a-d91f33c9d09a.png)

#### Output:
![40](https://user-images.githubusercontent.com/103336107/200037786-d49df33e-77f9-4095-a489-66b9ec40ba4e.png)

Many browsers (i.e:Internet Explorer) do not allow  prompt() without default argument.
In that case at least add “”  if you do not want any default value.

![39](https://user-images.githubusercontent.com/103336107/200037500-ffb743b3-4103-44bc-9a57-d13db75a71d3.png)

### confirm():
* The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
* A confirm box is often used if you want the user to verify or accept something.
* A confirm box takes the focus away from the current window, and forces the user to read the message.
* Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.
* The confirm() method returns true if the user clicked "OK", otherwise false.

#### Syntax:
![41](https://user-images.githubusercontent.com/103336107/200038382-8f68bb17-a31e-455f-a421-40b76f6af845.png)

#### Output :
![42](https://user-images.githubusercontent.com/103336107/200038608-bf059278-11fb-4bff-88bb-1d91949659bb.png)

#### Example of using confirm() in code:

![43](https://user-images.githubusercontent.com/103336107/200039438-f4b4285a-e31c-40f2-bcad-94fbdc2eeaa8.png)


[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/6_AlertPromptConfirm.html)


## Loops
Loops can execute a block of code a number of times.
In order to run the same code over and over again, each time with a different value, loops  are more preferable.

### for Loop:
For loop ,loops through a block of code a number of times.

#### Syntax:
![44](https://user-images.githubusercontent.com/103336107/200039993-4c657cb3-20d0-4b17-889d-e2747d4d9cce.png)

* Expression 1 is executed (one time) before the execution of the code block.
* Expression 2 defines the condition for executing the code block.
* Expression 3 is executed (every time) after the code block has been executed.

#### Code:
![45](https://user-images.githubusercontent.com/103336107/200040279-20ce5b79-2779-44df-b10a-f533eab07019.png)

#### Output:
![46](https://user-images.githubusercontent.com/103336107/200040460-6daa897e-86e8-4676-948c-5cca5c3bffb9.png)

### forEach() Loop: 
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

#### Syntax:
![47](https://user-images.githubusercontent.com/103336107/200123105-c7097ce2-5d42-4456-8f4f-cf732a85709e.png)

* function() :A function to run for each array element.
* currentElement : The value of the current element. 

#### Code:
![48](https://user-images.githubusercontent.com/103336107/200123177-ce45a8b7-b122-4cd6-9f71-ff0d7390b192.png)

#### Output:
![49](https://user-images.githubusercontent.com/103336107/200123215-42bfb50b-7978-4a54-91c5-982fcfa4c6d1.png)

#### Code 2:
Defining function separately and then use that with forEach() loop:
![50](https://user-images.githubusercontent.com/103336107/200123271-20b0cedc-ad4a-4a48-adb9-1931f85ba8fa.png)

#### Output:
![49](https://user-images.githubusercontent.com/103336107/200123283-7db3fa2a-ae4a-4d56-91be-b5799b251f1e.png)

#### Function with multiple parameters in forEach loop:
![51](https://user-images.githubusercontent.com/103336107/200123325-355af34e-e37e-4886-9ec9-256d49d58f59.png)

#### Output:
![52](https://user-images.githubusercontent.com/103336107/200123402-1161a451-268c-4f00-bed8-a90c8752f844.png)

### for of Loop:
The JavaScript for of statement loops through the values of an iterable object.
It loops over iterable data structures such as Arrays, Strings, Maps, NodeLists and many more.

#### Syntax:
![53](https://user-images.githubusercontent.com/103336107/200188328-510ed5c8-03b8-430e-9bcf-17313df523a2.png)

#### Code:
![54](https://user-images.githubusercontent.com/103336107/200188343-c4adea1b-e428-44da-b81b-45546a8aa7ed.png)

#### Output :
![55](https://user-images.githubusercontent.com/103336107/200188361-340c847a-082d-4a9e-849a-1d82ddbabd7d.png)

### for in Loop:
The JavaScript for in statement loops through the properties of an Object.

#### Syntax:
![56](https://user-images.githubusercontent.com/103336107/201171101-48bc2b06-1cdd-428a-88dd-ebbfd9456e5a.png)

#### Code:
![57](https://user-images.githubusercontent.com/103336107/201171333-debe120a-f41b-472d-aa0d-6bd46c54a0cf.png)

#### Output:
![58](https://user-images.githubusercontent.com/103336107/201171515-b1030c92-7ed8-4d63-b3b0-32f6b17f7d06.png)

### while Loop:
The while loop loops through a block of code as long as a specified condition is true.

#### Syntax:
![59](https://user-images.githubusercontent.com/103336107/201662156-2b1b8a1e-1d49-494a-95ee-f653513740d5.png)

#### Code:
![61](https://user-images.githubusercontent.com/103336107/201663303-81efcdef-08ef-4b01-b514-69a0c4f1fe06.png)

### do while Loop:
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

#### Syntax:
![62](https://user-images.githubusercontent.com/103336107/201663561-984cb99f-cbc4-4d12-8d84-909514f0926d.png)

#### Code:
![63](https://user-images.githubusercontent.com/103336107/201663709-5ea448ef-6126-46a9-ba2b-eff848ad917b.png)

#### Output:
do while loop at least run one time. That’s why its printing 
“34 is less than 30 and we are inside do while loop” one time.
![64](https://user-images.githubusercontent.com/103336107/201665554-c18c0a2a-9400-4c97-ac41-68f776c206ed.png)

[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/7_Loops.html)

## Three ways to add JavaScript :
**1.Inline Js:**

![65](https://user-images.githubusercontent.com/103336107/202218823-9bc58d28-fcae-40e3-bba0-a0ed0e6e5fed.png)

**2.Internal JS:**

![66](https://user-images.githubusercontent.com/103336107/202219246-4144b769-0464-4db8-9b41-625ab4303881.png)

**3.External JS:**

![67](https://user-images.githubusercontent.com/103336107/202219683-6a4bc88a-4952-4f0e-afbb-b4ac040e6785.png)

## DOM (**Document Object Model**)
### What is DOM ?
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
### Why is the DOM necessary?
Until now our websites have been static 
If we want our web site to be interactive, then we need to be able to change parts
of the web site on the fly.So that means, when a user clicks on a button, we'll need to respond to that by changing the content or the appearance of our website.
But once our web site is live on the Internet, we can't sit there and wait for the user to click on things on our web site and then update the HTML and CSS code, and then reload their web page.That's impossible.

**Now this is the problem that the DOM or the Document Object Model solves.
It basically catalogs the web page into individual objects that we can select and manipulate.**

### How does DOM work?
The task of converting an HTML file into the DOM is done by the browser when you load up the web page. And what it does is that it turns each of these elements and their associated data into a tree structure with a whole bunch of objects that you can select and manipulate.

The tree model on the below is usually how the DOM is represented.
..........

## Window Object
**The window object represents a window in browser.Window is the object of browser.It is not the object of javascript.An object of window is created automatically by the browser.The javascript objects are string, array, date etc.**
### Methods of Window Object
Some of the frequently used window object methods are :
* alert() : Displays an alert box with a message and an OK button.
* prompt() : Displays a dialog box to get input from the user.
* confirm() : Displays a dialog box with a message and an OK and a Cancel button.
* open() : Used to open a new window.
* close() : Close the current window.
* setTimeout() : Calls a function or evaluates an expression after a specified number of milliseconds.
* clearTimeout() : Clears a timer set with setTimeout().
* setInterval() : Calls a function or evaluates an expression at specified intervals of milliseconds.
* clearInterval() : Clears a timer set with setInterval().</br>

We have already seen about alert(),prompt() and confirm() in detail. Let's explore about other methods in detail :

### setTimeout() : This method calls and run a function once after a specified number of milliseconds.
#### Syntax: setTimeout(function name,time in ms);
#### Code:
![68](https://user-images.githubusercontent.com/103336107/206757744-42c0347e-b9cf-419a-b1a7-55771425640e.png)

#### Output: (After 5000 milliseconds)
![69](https://user-images.githubusercontent.com/103336107/206757996-8e81c594-168f-4a75-a2b4-758c94f77cbb.png)

#### We can pass multiple argument to the function and use it with setTimeout():
![70](https://user-images.githubusercontent.com/103336107/206759206-e34ed698-30f3-461f-a4ba-61fe40b3daee.png)

#### Output: (After 5000 milliseconds)
![71](https://user-images.githubusercontent.com/103336107/206759448-667c7559-e6a3-4dc2-85b7-dc08ced1570f.png)

### clearTimeout():This method clears a timer set with the setTimeout() method.</br>
If a user visits our website and we want to ask a user to sign up after 10 seconds but the user already signed up before 10 seconds ,for this type of scenario we can use clearTimeout() to clear the timer set with the setTimeout() method.

To clear a timeout, we use the id returned from setTimeout().Because of that function associated with setTimeout() method will not run.
#### Syntax: clearTimeout(id returned by setTimeout());
#### Code:
![72](https://user-images.githubusercontent.com/103336107/206838087-c8f83194-725c-4989-a97c-24a035c84617.png)

#### Output: It prints the id returned from setTimeout()
![73](https://user-images.githubusercontent.com/103336107/206838103-1304e671-0f92-4d66-9938-3a4d0141c035.png)

### setInterval() : Calls a function or evaluates an expression at specified intervals of milliseconds.The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
If we want to execute a function multiple times and at a specific interval of time then ,it is preferable to use setInterval() instead of setTimeout().
#### Syntax: setInterval(function name,time in ms);
#### Code:
![74](https://user-images.githubusercontent.com/103336107/206849643-f1d71e9f-506b-4e1c-8851-5ed6b57bc9cd.png)
#### Output: 
![75](https://user-images.githubusercontent.com/103336107/206849830-f4e906c1-85ff-42ea-b3cf-57f79d78fd3c.png)

fun3 runs 17 times and it will keep running until clearInterval() is called, or the window is closed.

### clearInterval() : Clears a timer set with setInterval().
To clear an interval, we use the id returned from setInterval() method.
#### Syntax: clearInterval(id returned by setInterval());

#### Code:
![76](https://user-images.githubusercontent.com/103336107/206850825-b953b290-e8c0-4244-a010-763d793259f8.png)

#### Output: It prints the id returned from setInterval()
![77](https://user-images.githubusercontent.com/103336107/206850897-1507d8e8-63e5-41fb-85e1-ee7ce2596362.png)

[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/9_WindowObjectMethods.html)


## Creating a basic Real Time Clock with setInterval() method:
#### Code:
![78](https://user-images.githubusercontent.com/103336107/206852170-6ea80896-6a11-4a47-9faf-8bcfc712b940.png)

#### Bowser Window:
![79](https://user-images.githubusercontent.com/103336107/206852182-8a47c80e-6169-4392-88a0-b28f7109617a.png)

[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/10_RealtimeClock.html)


## Date and Time in JavaScript 
Java Script has a built-in Date object.It stores the date, time and provides methods to get and set day, month, year, hour, minute and seconds.Date objects are static.

###Creating Date Object:
**Date objects are created with the new Date() constructor.**
![80](https://user-images.githubusercontent.com/103336107/207137104-6ddbb9ea-0554-4da7-ac8c-4d01a6f5b3dd.png)
**Creating a Date object  without arguments shows the current date and time.**
#### Output :
![81](https://user-images.githubusercontent.com/103336107/207137248-efa086da-39da-4838-bf95-5716432d4c9f.png)

### Diffrent ways to create a new date object through passing arguments:
* new Date(date string)
* new Date(year,month)
* new Date(year,month,day)
* new Date(year,month,day,hours)
* new Date(year,month,day,hours,minutes)
* new Date(year,month,day,hours,minutes,seconds)
* new Date(year,month,day,hours,minutes,seconds,ms)
* new Date(milliseconds)</br>

**JavaScript counts months from 0 to 11.</br>
0: January</br>
11: December**

#### Create Date Objects with date string:
![82](https://user-images.githubusercontent.com/103336107/207138283-f24f2dd4-6960-4fe6-a60a-5a6287b3507d.png)

#### Output:
![83](https://user-images.githubusercontent.com/103336107/207138318-36b5e3ad-d6b5-4733-b59b-3d22f8977726.png)

#### Create Date object with year,month,day,hours,minutes,seconds,ms:
![84](https://user-images.githubusercontent.com/103336107/207138501-3a97bf84-a1d1-4096-9248-cc1a8fea2001.png)

#### Output:
![85](https://user-images.githubusercontent.com/103336107/207138553-4ae38bd8-33cc-4c14-a031-f74ec6a11a10.png)

### Get Date Methods in JavaScript
From Date object,we can easily get the current date and time with the help of Get Date methods.

#### Code:

![86](https://user-images.githubusercontent.com/103336107/207140526-e947dd19-990b-4305-87bc-3d6bb62cafeb.png)



#### Output:
![87](https://user-images.githubusercontent.com/103336107/207140729-712bc419-6e46-4e59-b4a1-06b05230e8c7.png)

### Set Date Methods in JavaScript
Set Date methods allow us to set date values of a Date Object i.e : years, months, days, hours, minutes, seconds, milliseconds .
#### Code:
![88](https://user-images.githubusercontent.com/103336107/207142381-af04e2df-9b25-4d7c-9dd2-75cc9e970cd5.png)

#### Output:
![89](https://user-images.githubusercontent.com/103336107/207142435-3714db84-6d40-4998-8b13-26e237b348e9.png)

[code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/11_DateAndTime.html)

## Arrow Function in JavaScript
An arrow function expression is a syntactically compact alternative to a regular function expression,although without its own bindings to this, arguments, super or new.target keywords. Arrow function expressions are ill-suited as methods, and they cannot be used as constructors.

![90](https://user-images.githubusercontent.com/103336107/208190439-06d7600f-f2f0-46c1-bf4b-6532b718f67b.png)

#### Output:
![91](https://user-images.githubusercontent.com/103336107/208188391-be7de69f-243f-4e9d-a87b-c6ec2beb8c3a.png)


#### Arrow Function with one argument and one statement :
* If the arrow function has one argument ,we don't have to put brackets.
* If the function has only one statement, we can remove the brackets and the return keyword.

![92](https://user-images.githubusercontent.com/103336107/208191771-9052c13c-d71d-487d-92e2-b4f2a4c09a7c.png)

#### Output:
![93](https://user-images.githubusercontent.com/103336107/208191786-abda1d07-2a99-43dc-a90f-c6cde2a3c501.png)

#### Arrow function as Expression:
![94](https://user-images.githubusercontent.com/103336107/209097538-769ccb34-4522-40ad-8f4e-db97b16a8d91.png)

#### Output:
![95](https://user-images.githubusercontent.com/103336107/209097571-dcd61735-b84e-4b1f-9767-9d86ac24b085.png)

#### Arrow function with multiple line:
![96](https://user-images.githubusercontent.com/103336107/209098014-4b146990-01a6-4b29-b3c3-71f075871a53.png)

#### Output:
![97](https://user-images.githubusercontent.com/103336107/209098231-392d15c4-73a7-4aed-93a2-0d172b954a3c.png)

### Lexical this in Arrow Function:
Incase of a regular function , this keyword has its scope inside the function where it calls. Means it refers to the variable inside the function where it is called.
But arrow function does not have its own this.Incase of arrow function this keyword always represents the object that defined the arrow function.

