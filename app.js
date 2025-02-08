
function myFunction(p1, p2) {
    return p1 * p2;
}
let result = myFunction(6, 3);

console.log(myFunction);
console.log(result);

const button = document.getElementById("myButton");
button.addEventListener("click", function() {

    button.textContent = "Thank you"; // Change button text to "Thank you" on click

  });
const name="Burger";

function toUpper(text) {
   const upperCased = text.toUpperCase();
    console.log(upperCased);
 
}

toUpper(name);



//this is a message
const object=
{
    firstTopping: "Lettuce",
    secondTopping: "Onion",
    thirdTopping: "Tomatoe"
};

document.getElementById("burger").innerHTML = object.firstTopping + "and" + object.secondTopping + "please."

//