var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

//function to start a new game
var startGame = function () {
  //Reset player health
  playerHealth = 100;
  playerAttack = 50;
  playerMoney = 10;


  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));


      //pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      //Reset enemy health before starting a new fight
      enemyHealth = 50;

      fight(pickedEnemyName);
    }

    //function to end the entire game
    var endGame = function () {
      //If player is still alive, player wins
      if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You've now have a W " + playerMoney + ".");
      }
      else {
        window.alert("You've lost your robot in battle.")
      }
      var playAgainConfirm = window.confirm("Would you like to play again?")

      if (playAgainConfirm) {
        startGame();
      } else {
        window.alert("Thank you for playing! Come back soon!")
      }
    }

  };
  endGame();
};

startGame();

// var startGame = function () {
//   //Display player's score and ask if the player would like to try again.
//   //Display the player's 
//   // current playerHealth, playerAttack, and playerMoney
//   //window.alert('Your current score is: playerHealth + playerAttack + playerMoney');
//   //window.alert('Would you like to play again?')  
// }

// var endGame = function () {
//   //End of the game
//   //Go back to start game
// }

// var shop = function () {
//   //Ask if the player wants to refill health, upgrade, or leave shop. 
//   //If refill subtract money points from the player and increase health
//   //If upgrade, subtract money points from player and increase attack power
//   //if leave, alert goodbye and exit the function
//   //if any other invalid option, call shop() again
// }

