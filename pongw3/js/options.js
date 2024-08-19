/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
document.querySelector("#options h2").onclick = function() {
    var sDiv = document.querySelector(".sides");
    sDiv.classList.toggle("hidden");
};
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
const fillInputs = document.querySelectorAll('.fill');
const outputDivs = document.querySelectorAll('.output');

fillInputs.forEach((input, i) => {
    
    input.value = player[i].filll;
    outputDivs[i].innerHTML = player[i].fill;

    // Add an input event listener to each fill input
    input.addEventListener('input', e => {
        const playerIndex = Array.from(fillInputs).indexOf(e.target);
        player[playerIndex].setProps({ fill: e.target.value });

        outputDivs[playerIndex].innerHTML = e.target.value;

    });
});

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
