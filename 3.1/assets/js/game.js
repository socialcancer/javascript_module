var playerName = window.prompt("What is your robot's name?");
var cancelPlayer = window.prompt("Want to cancel?")
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;


var cancelGame = function () {
  if (cancelPlayer == "true" || cancelPlayer == "TRUE") {
    console.log("The player wants to end the game");
    endGame();
  }
};

cancelGame();


//our shop function
function shop() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: (REFILL, UPGRADE, or LEAVE) to make a choice.");

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
      if (playerMoney >= 7) {


        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE": //new case
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "LEAVE": //new case
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
}

//function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
}


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
        playerMoney = Math.max(0, playerMoney - 10);
        // playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    // enemyHealth = randomNumber();
    // enemyHealth = enemyHealth - playerAttack;
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    // playerHealth = Math.max(0, playerHealth - enemyAttack);
    // playerHealth = playerHealth - enemyAttack;
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
      // enemyHealth = 50;
      enemyHealth = randomNumber();
      console.log(enemyNames[i] + " starting health " + enemyHealth);

      fight(pickedEnemyName);
      //if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        //Ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store to refuel");

        //if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }

      }
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
      var playAgainConfirm = window.confirm("Would you like to play again?");

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

//Start enemies at a random health between 40 and 60

//start enemies with a random attack between 10 and 14

//Make attack damage random, using the robot's attack value as an upper limit