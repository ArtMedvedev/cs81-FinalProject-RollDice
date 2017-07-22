/*
 * CS81: JavaScript - Final Project
 * Created by artmedvedev on 7/20/17.
 */

function dice() {


    //Generate random value for dice
    var x1 = Math.ceil(Math.random() * 6);
    var x2 = Math.ceil(Math.random() * 6);
    var y1 = Math.ceil(Math.random() * 6);
    var y2 = Math.ceil(Math.random() * 6);


    // Calculate sum of 2 dices for each player
    var sum1 = x1 + x2;
    var sum2 = y1 + y2;


    // Find all dices
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
    var dice3 = document.getElementById('dice3');
    var dice4 = document.getElementById('dice4');


    // Declare new value for dices
    dice1.src = 'dice' + x1 + '.jpg';
    dice2.src = 'dice' + x2 + '.jpg';
    dice3.src = 'dice' + y1 + '.jpg';
    dice4.src = 'dice' + y2 + '.jpg';

    // Add new style to show animation by rotation
    dice1.style.transform = "rotate(360deg)";
    dice2.style.transform = "rotate(360deg)";
    dice3.style.transform = "rotate(360deg)";
    dice4.style.transform = "rotate(360deg)";

    // Add another style to show speed of animation
    dice1.style.transition = '1s';
    dice2.style.transition = '1s';
    dice3.style.transition = '1s';
    dice4.style.transition = '1s';

    // Timer to return rotation
    setTimeout(clerTransform, 1100);


    // Create new variables of divs for each player. Later will use it in if-else
    var divPlayer = document.createElement('div');
    var divComputer = document.createElement('div');


    // Use if-else to find and show who win or lose
    // Draw
    if (sum1 == sum2) {
        document.getElementById('p').innerHTML = 'It is <b>DRAW</b>';
        document.getElementById('plr').innerHTML = 'Try again';
        document.getElementById('pc').innerHTML = 'Try again';

        // Create text for new div
        divPlayer.innerHTML = 'Player\'s result is: ' + sum1;
        // Add new created div
        document.getElementById('playerResult').appendChild(divPlayer);
        // Add some styles for animation
        getComputedStyle(divPlayer).opacity;
        divPlayer.style.opacity = '1';
        divPlayer.style.background = 'lightcyan';

        // var divComputer = document.createElement('div');  //--------------
        divComputer.innerHTML = 'Computer\'s result is: ' + sum2;
        document.getElementById('computerResult').appendChild(divComputer);
        getComputedStyle(divComputer).opacity;
        divComputer.style.opacity = '1';
        divComputer.style.background = 'lightcyan';

    // Player's win
    } else if (sum1 > sum2) {
        document.getElementById('p').innerHTML = 'Winner is <b>Player</b> with result: ' + sum1;
        document.getElementById('plr').innerHTML = 'Win';
        document.getElementById('pc').innerHTML = '';

        divPlayer.innerHTML = '<b>WIN</b> with result: ' + sum1;
        document.getElementById('playerResult').appendChild(divPlayer);
        getComputedStyle(divPlayer).opacity;
        divPlayer.style.opacity = '1';
        divPlayer.style.background = 'lightgreen';

        divComputer.innerHTML = '<b>Lose</b> with result: ' + sum2;
        document.getElementById('computerResult').appendChild(divComputer);
        getComputedStyle(divComputer).opacity;
        divComputer.style.opacity = '1';
        divComputer.style.background = 'pink';

    // Computer's win
    } else {
        document.getElementById('p').innerHTML = 'Winner is <b>Computer</b> with result: ' + sum2;
        document.getElementById('plr').innerHTML = '';
        document.getElementById('pc').innerHTML = 'Win';

        divComputer.innerHTML = '<b>WIN</b> with result: ' + sum2;
        document.getElementById('computerResult').appendChild(divComputer);
        getComputedStyle(divComputer).opacity;
        divComputer.style.opacity = '1';
        divComputer.style.background = 'lightgreen';

        divPlayer.innerHTML = '<b>Lose</b> with result: ' + sum1;
        document.getElementById('playerResult').appendChild(divPlayer);
        getComputedStyle(divPlayer).opacity;
        divPlayer.style.opacity = '1';
        divPlayer.style.background = 'pink';

    }

}

function clerTransform() {
    // Clear style of rotation back to 0deg
    dice1.style.transform = "rotate(0deg)";
    dice2.style.transform = "rotate(0deg)";
    dice3.style.transform = "rotate(0deg)";
    dice4.style.transform = "rotate(0deg)";

    // Very fast speed of back animation, user doesn't see it
    dice1.style.transition = '0.01s';
    dice2.style.transition = '0.01s';
    dice3.style.transition = '0.01s';
    dice4.style.transition = '0.01s';
}
