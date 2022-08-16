// Add event listener for clicking a button.

var everyButton = document.querySelectorAll("button");

for (var i = 0; i < everyButton.length; i++) {
    var clickedButton = everyButton[i];
    var key = this.innerHTML;
    clickedButton.addEventListener("click", makeSound);
}



// Add event listener for pressing a keyboard button.

document.addEventListener("keydown", makeSound);



// Add handle function to make sound with different events.

function makeSound(event) {
    switch(this.innerHTML || event.key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            
    }
    // if we call the buttonAnimation function two times
    // with the this.innerHTML and with the event.key parameters
    // one of these calls returns with undefined (which leads to an error),
    // so we need a variable where we select the non-undefined return value.
    var currentKey = this.innerHTML || event.key;
    buttonAnimation(currentKey);
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // Add timeout to remove the pressed class

    setTimeout(removePressed, 100);

    function removePressed() {
        activeButton.classList.remove("pressed");
    }
}
