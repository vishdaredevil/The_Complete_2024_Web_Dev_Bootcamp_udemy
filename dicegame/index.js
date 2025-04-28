let randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage="dice" + randomVariable1+".png";
var randomimagesource="images/"+randomdiceimage;
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomimagesource);
let randomVariable2 = Math.floor(Math.random() * 6) + 1;
var randomimagesource2="images/dice"+randomVariable2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
let heading = document.querySelector("h1");
if (randomVariable1 > randomVariable2) {
    heading.textContent = "🚩 Player 1 Wins!";
} else if (randomVariable1 < randomVariable2) {
    heading.textContent = "Player 2 Wins! 🚩";
} else {
    heading.textContent = "It's a Draw!";
}