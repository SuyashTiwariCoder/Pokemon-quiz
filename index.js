var a = require("readline-sync") ;
const chalk = require('chalk');


score=0;
let userName = a.question("what is your name ?  ");
console.log(`Welcome ${userName} how r u `);
console.log (`dDar ${userName} Do u wanna play a pokemon quiz ?`);

let gamePart = a.question("yes  or no   --> ");
if(gamePart === "yes"){
  console.log("then grab your seatbelts  ");
}
else{
   console.log("no problem better luck next time  ");
   no();
}
function quiz(question , answer)
{
  let userAnswer = a.question(question);
  if (userAnswer === answer)
  {
    console.log(`yes you are right mr.${userName}`)
    score++;
  }
else {
  console.log( `No Mr.${userName} you are wrong`)
 
}
console.log('current score', score);
console.log(`----------------------`);
}

let questions = [{
  question: "1 ) Which pokemon does ash have  ---> ",
answer: "pikachu"},{
  question: "2) Which pokemon hated ash the most ---> ",
  answer: "charizard"},{
  question: "3) The pokemon which is part of team rocket ---> ",
  answer: "meouth"},{
  question: "4) Name of pokemon that makes people sleep ---> ",
  answer: "jigglipuff"},{
  question: "5) Which pokemon pikachu becomes after evolving ---> ",
  answer: "raichu"}]

   for (let i=0 ; i<questions.length ; i++)
 {
   let currentQuestion = questions[i];
   quiz(currentQuestion.question , currentQuestion.answer);
 }
  console.log(chalk.blue("Your final score is ") , score );

 function no(){
   console.log("If you wanna play . Press Yes!!");
   break;
 }