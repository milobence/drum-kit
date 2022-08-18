// Add event listener for clicking a button.

$("button").on("click", function( ){
    var clickedButton = $(this).text();
    makeSound(clickedButton);
});

// Add event listener for pressing a keyboard button.

$(document).on("keypress", function (event) {
    makeSound(event.key);
});

// A function where the sounds belong to a button

function makeSound(event) {
    switch(event) {
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
    }

    buttonAnimation(event);
    
}

// Add animation to the pressed buttons

function buttonAnimation(event) {

    // Add class "pressed" to the pressed button
    
    $("." + event).addClass("pressed");

    // Set timeout to remove class "pressed"

    setTimeout(function () {
        $("." + event).removeClass("pressed");
    }, 100);
}