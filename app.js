console.log("Sanity check");

//Finding HTML elements
//console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);

//finding elements by tag name
//console.log(document.getElementsByTagName("script"));
var TagElements = document.getElementsByTagName("script");
console.log(TagElements);

//finding elements by class name
//console.log(document.getElementsByClassName("use-class-method"));
var	ClassElements = document.getElementsByClassName("use-class-method");
console.log(ClassElements);

//changing HTML elements
console.log(idElement.innerHTML);
idElement.innerHTML = "I Have Been Changed";

console.log(ClassElements[1]);

