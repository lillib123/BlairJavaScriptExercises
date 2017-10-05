// 1)
var a = Number(prompt("An nth Triangle Number is n + n+1. For example, with n=5, the triangular number would be 0+1+2+3+4+5, or 15. Enter a number to triangulate."));
var sum = 0;
while (Number.isInteger(a) === false) {
var a = Number(prompt("Please enter an integer to triangulate."));
if (Number.isInteger(a)===true) {
  break;
  }
}
for (var i=0; i<=a; i++) {
  sum = (sum + i);
}
  console.log(sum + " is " + a + "'s triangular number.");

// 2)
var sentence = (" ");
do {
  var yesorno = String(prompt("Do you want to play?"));
  if (yesorno === "no") {
    break;
  }
  while (yesorno != "yes" && yesorno != "no") {
    var yesorno = String(prompt("Do you want to play? Enter yes or no."));
    if (yesorno === "no") {
      break;
    }
  }
  if (yesorno === "yes") {
    var wordtoadd = String(prompt("Enter a word."));
    var sentence = (sentence + " " + wordtoadd);
  }
  else if (yesorno === "no") {
    console.log(sentence)
    break;
  }
}
while (yesorno = "yes");


//3
var yesorno = String(prompt("Would you like to print your name?"));
if (yesorno != "yes") {
  console.log("Have a lovely day.");
}
if (yesorno === "yes") {
  var name = String(prompt("Enter your name."));
  console.log(name);
  var again = String(prompt("Would you like to print your name AGAIN?"))
  while (again === "yes") {
    var name = (name + "!");
    console.log(name);
    var again = String(prompt("Would you like to print your name AGAIN?"))
  }
  if (again != "yes") {
    console.log("Thanks for playing!");
  }
}

//4
var time = String(prompt("What time of day is it?"));
while (time != "morning" || time != "noon" || time != "evening") {
  var time = String(prompt("What time of day is it?"));
  if (time === "morning" || time=== "noon" || time=== "evening") {
    break;
  }
}
if (time=== "morning") {
  console.log("Since it's morning, you should be eating breakfast. We suggest eggs and toast.");
}
else if (time === "noon") {
  console.log("Since it's noon, you should be eating lunch. We suggest a salad.");
}
else if (time === "evening") {
  console.log("Since it's evening, you should be eating dinner. We suggest chicken and rice.");
}
