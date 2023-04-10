$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["Yes, 👴🏻 My Guy", "💅🏼Si Ms. Girl! 💁🏽‍♀️","Hell No Fresno 🚫","🤬Phuuck No 🖕🏼", "Tu que crees 🤨", "Waki 🤢","Ch!*g@ Tu M@dr* 🤬","Heck yes, Tech Yes!", "Good Answer Steve!", "Bruhh..🙄" ,"Bye, Felicia! ✌🏼", "Ms. Girl..💅🏼 Please","Duh Felipe!🤦🏻‍♀️", "Te apesta a culo 🍑","Hasta La Vista Baby", "You're not the father 👨", "No for I have Spoken 🚫", "Si Perro 🐶", "Ask my boii Dennis", "Ms. Girl 💅🏼", "👸🏻Material Girl 💅🏼","No Mames Wey 🍆","La Traes Verde 💩","🥋Catch these hands 🥊","Yo moms a hoe 💁🏽‍♀️", "Yaaass 👸🏻 Queen ","No Pues Wow 😒","Ask Future", "Tus Nalgas 🍑 dipped in Vinagre", "Really hoe? 😒","Tu mama wey 🤰🏻","🤬 Chinga 20 🖕🏼"];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = prompt("What do you want to know?");
      magic8Ball.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });
