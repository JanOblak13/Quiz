class Quiz {
  constructor(){
    this.greeting=createElement('h2');
}
  
 
  display(){
    this.greeting.html("The+correct+answer+is+2 " +name);
    this.greeting.position(50,160);
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns === allContestant[plr].answer)
    fill("green")
    else
    fill("red");
  }

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

  if(allContestant !== undefined){
    fill("Blue")
    textSize("20")
    text()
  }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
