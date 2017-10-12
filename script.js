// 1)
var a = prompt("Enter a number.");
var sum = 0;
while (Number.isInteger(a) === false) {
var a = Number(prompt("Please enter an integer."));
if (Number.isInteger(a)===true) {
  break;
  }
}
for (var i=0; i<=a; i++) {
  sum = (sum + i);
}
  console.log(sum + " is " + a + "'s triangular number.");

// 2)
 var result = "";
 var answer = prompt("Do you want to play?");

while(answer!="yes" && answer !="no")
{
    answer = prompt("Do you want to play? Please enter yes or no.");
}
do{
  if(answer === "yes")
  {
  var result = result + " " + prompt("Enter a Word.");
  answer = prompt("Do you want to play again?");
  }
  else if(answer === "no")
  {
    break;
  }
  else {
      answer = prompt("Do you want to play? Please enter yes or no.");
  }
} while(answer != "no")
console.log(result);


//3
var yesorno = prompt("Would you like to print your name?");
if (yesorno != "yes") {
  console.log("Have a lovely day.");
}
if (yesorno === "yes") {
  var name = prompt("Enter your name.");
  console.log(name);
  var again = prompt("Would you like to print your name AGAIN?");
  while (again === "yes") {
    var name = (name + "!");
    console.log(name);
    var again = prompt("Would you like to print your name AGAIN?");
  }
  if (again != "yes") {
    console.log("Thanks for playing!");
  }
}

//4
var time = prompt("What time of day is it?");
while (time != "morning" || time != "noon" || time != "evening") {
  var time = prompt("What time of day is it?");
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
