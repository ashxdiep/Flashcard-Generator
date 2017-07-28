// require from basic and cozone
var Basic = require("./BasicCard");
var Cozone = require("./cozoneCard");

//require the inquirer package
var inquirer = require("inquirer");

//variable array to push all the the basic cards information
var basicarr = [];
//variable array to push all the cozone cards into
var cozonearr = [];

//make five basic cards
var king = new Basic("Which king tried to kill his wives for not bearing a song?", "henry vii");
var potter = new Basic("In Harry Potter, what did Dumbledore leave Harry in his will?" , "golden snitch");
var perseus = new Basic ("Perseus is famous for killing who/what?", "medusa");
var zebras = new Basic ("What is a group of zebras called?" , "team");
var flies = new Basic("In “lord of the flies”, ralph uses what to summon the boys?", "conch");

basicarr.push(king);
basicarr.push(potter);
basicarr.push(perseus);
basicarr.push(zebras);
basicarr.push(flies);

//make five cozone cards
var president = new Cozone("Abraham Lincoln was the 16th president","Abraham Lincoln");
var phelps = new Cozone ("Michael Phelps broke a 2000 year old Olympics record swimming individual medley" , "individual medley");
var friends = new Cozone ("In the show 'Friends', the characters sat on a/an orange colored couch in Central Park." ,"orange");
var lyrics = new Cozone("Finish these lyrics. 'Get like me. Never met a mf fresh like me.'" , "fresh like me");
var country = new Cozone("Russia is the world's largest country.", "Russia");

cozonearr.push(president);
cozonearr.push(phelps);
cozonearr.push(friends);
cozonearr.push(lyrics);
cozonearr.push(country);

//count of how many right
var correct = 0;

//count of what round we're on
var round = 0;

//ask basic questions
var askBasic = function(){

  //ask the question
  inquirer.prompt([{

    type: "input",
    message: basicarr[round].Front,
    name: "answer"

  }]).then(function(response){

    //if answer matches the back
    if (response.answer.toLowerCase() === basicarr[round].Back){

      //inform they are correct, add a point to correct
      console.log("You are correct!");
      correct++;
      round++;


    }
    //else
    else{

      //tell them they are incorrect, and the correct answer
      console.log("INCORRECT! The right answer is " + basicarr[round].Back);

     //update round
     round++;

    }

    //if the round is six, ask cloze cards
    if (round === 5){
      round = 0;
      askCloze();
    }
    //else, ask basic question again
    else{
      askBasic();
    }
  });
};

var askCloze = function(){

    inquirer.prompt([{

      type: "input",
      message: cozonearr[round].Partial,
      name: "answer2"

    }])
    .then(function(res){

      //if answer matches the cloze deleted Partial
      if (res.answer2.toLowerCase() === cozonearr[round].Cloze.toLowerCase()){

        //update correct and round
        correct++; round ++;

        //tell them they are correct
        console.log("You are correct!!");
      }

      //else
      else{

        //tell them they are wrong and the right answer
        console.log("You are incorrect! The correct answer is " + cozonearr[round].Cloze);

       //update round
        round ++;
      }

      //if round is 5
      if (round === 5){

        //tell them how much they got right
        console.log("That's all the questions! You got " + correct + "/10 correct.");
      }
      //else
      else{

        //ask another cloze question
        askCloze();
      }


    });
};
askBasic();
