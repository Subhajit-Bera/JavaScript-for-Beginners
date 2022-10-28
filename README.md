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

[Code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/1_Variables.html)


## String In Java

A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

#### Defining a String:
We can define a string in JS by using “ ” and ‘ ‘  both.
When we need to use “ “  inside a string we define the string using ‘ ‘ and vice versa.


#### String Template Literals :


## String Functions

#### 1.Length function :
Length is an ECMAScript(ES1) feature.
Used to return the length of an object.

#### 2.indexOf(“”) and lastIndexOf(“”) :


#### 3.slice(start index,end index):  perform slicing from starting index to end-1 index.

#### 4.substring(start index,end index): works the same as slice.

ONLY DIFFERENCE BETWEEN slice AND substring IS: slice TAKES NEGATIVE VALUE ,WHERE substring DOESN’T ALLOW NEGATIVE VALUE. 

#### 5.substr(start index,end index) : get the substring from starting to ending index (including ending index)

#### 6.replace:


#### 7.toUpperCase() & toLowerCase()

#### 8.charAt() &  charAt()

#### 9.concat(“new string”):

#### 10.trim()

#### 11.Another way to access character from a string: 


[Code reference](https://github.com/Subhajit-Bera/JavaScript-for-Beginners/blob/main/2_StringAndStringMethods.html)

## var vs let vs const

**var**: Scope of var is by default global.Doesn’t give any error if we declare a variable multiple times (same name). Which may lead to a problem in a program.
But if we declare the var inside any function, then its scope will remain under that function. 

**let** :  We can’t declare a variable multiple times using let.If we declare the var inside any function, then its scope will remain under that function.It is preferred to use let upon var.

**const** : Value can’t change once declared.

## if-else & switch
