var readlineSync=require('readline-sync');
var chalk=require("chalk");
console.log(chalk.bgWhite(chalk.black("Do you want to Know how well you know me?")));
console.log("\n");
console.log(chalk.underline(chalk.blue("Rules of the game")));

console.log(chalk.green("For correct answer you get +1"));
console.log(chalk.red("For every incorrect answer you get -1"));
console.log("\n");
var userName=readlineSync.question("Enter your name to play the game?"+"\n");
var score=0;
var max=Number.NEGATIVE_INFINITY;
var scorecard=[{name:"Ayush panda",score:"8"},{name:"Bharat Mohanty",score:"5"},{name:"Adarsh Mohanty",score:"2"},{name:"Kumar Saransh",score:"9"}];

console.log(userName);
var ListOfQ=[{question:"Is my nickname sri ? ",
                a:"yes",
                b:"no",
                Ans:"b"},
                {question:"Is my age 22 ?",
                a:"yes",
                b:"no",
                Ans:"a"},
                {question:"Do I like cricket ? ",
                a:"yes",
                b:"no",
                Ans:"a"},
                {question:"Am I a programmer ?",
                a:"yes",
                b:"no",
                Ans:"a"},
                {question:"Is GodFather is my Favorite movie? ",
                a:"yes",
                b:"no",
                Ans:"b"},
                {question:"Am I a vegeterian ?",
                a:"yes",
                b:"no",
                Ans:"b"},
                {question:"Do I like to read books ?",
                a:"yes",
                b:"no",
                Ans:"b"},
                {question:"Is chicken butter masala is my fovorite dish to eat ?",
                a:"yes",
                b:"no",
                Ans:"a"},
                {question:"Do I like weightlifting ?",
                a:"yes",
                b:"no",
                Ans:"a"},
                {question:"Is counter strike is my favorite game to play?",
                a:"yes",
                b:"no",
                Ans:"a"},
                ]
 function play(question,answer,a,b){
   var UserAns=readlineSync.question(chalk.blue(question+"\n"+"a: "+a+"\n"+"b: "+b+"\n"));
   if(UserAns.toLowerCase()==answer){
      score++;
      console.log(chalk.green("yes,you are right"));
   }
   else{
       score--;
       console.log(chalk.red("Oops!,you are wrong"));
   }
   console.log("current score: "+score);
   console.log("-------------------------------------------------------------");
} 

for(var i=0;i<ListOfQ.length;i++){
    var {question,Ans,a,b}=ListOfQ[i];
    play(question,Ans,a,b);
}              
console.log(chalk.bgBlue("Final Score: ",score));
let object={name: `${userName}`,score:`${score}`}
scorecard.push(object);
console.log("ScoreCard: ",scorecard);


function highscore(scorecard){
    for(var i=0;i<scorecard.length;i++){
         var {name,score}=scorecard[i];
         if(score>max){
            max=score;
            var highscorer=scorecard[i].name;
         }
    }
    console.log(chalk.bgBlue("Highscore: "+max+" by "+highscorer));
}
highscore(scorecard);