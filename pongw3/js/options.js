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
    input.value = player[i].fill;
    outputDivs[i * 2].innerHTML = player[i].fill;

    input.addEventListener('input', e => {
        const playerIndex = Array.from(fillInputs).indexOf(e.target);
        player[playerIndex].updateFill(e.target.value);
        outputDivs[playerIndex * 2].innerHTML = e.target.value;
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
/*const uInput = document.querySelectorAll(`.u`);
const oDivs = document.querySelectorAll('.output');
uInput.forEach((input, i) => {
    uInput.value = player.keys;
    oDivs.innerHTML = player.keys;
})

const handleKeydown = (e, input, playerIndex) => {
    e.preventDefault(); // Prevent default action to avoid unwanted behavior
    const keyName = e.key; // Get the name of the pressed key
    input.value = keyName; // Set the input's value to the pressed key
    player[playerIndex].props({ keys: { ...player[playerIndex].props.keys, u: keyName } }); // Update the player's keys
    oDivs[playerIndex].innerHTML = `UP: ${keyName}`; // Update the output div
}
*/
