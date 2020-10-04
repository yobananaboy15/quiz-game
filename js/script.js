document.addEventListener('DOMContentLoaded', e => {

  // let testNode;

  document.getElementById('start-btn').addEventListener('click', async e =>{

    let playerName = document.getElementById('player-name')
    let NumberOfQuestions = document.getElementById('number-of-questions')
    let previousButton = document.getElementById('previous-btn')
    let nextButton = document.getElementById('next-btn')

    if (playerName.value && (+NumberOfQuestions.value) >= 5 && +NumberOfQuestions.value <= 10) {

      const quiz = new Questions();
      quiz.questionArray = await quiz.fetchQuestions(+NumberOfQuestions.value);
      quiz.createQuestionArray();

      const game = new Game('axel', 0);

      const interface = new Interface(quiz.elementArray);

      //knapp för att gå bakåt en fråga index = current + 1
      previousButton.addEventListener('click', e => interface.previousQuestion())

    //Knapp för att gå framåt en fråga index = current - -1
      nextButton.addEventListener('click', e => interface.nextQuestion())

    //skapa knapp för submit, använder sig av game.

      //tar bort formuläret och visar den första frågan.
      //spara form i variabel och använde igen för att starta om spelet. man kan köra append på 
      let testNode = e.target.parentNode;

      e.target.parentNode.remove();

      //document.getElementById('question-container').append(testNode);

      interface.newGame()
    }
      
  })
  // console.log(testNode)
  
    
})

//kolla om obj.multiple_correct_answer === true. ovanligt 1 på 20.


