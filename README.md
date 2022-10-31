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

#### 5.substr(start index,end index) : get the substring from starting to ending index (including ending index)
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

## if-else & switch
