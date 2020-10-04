document.addEventListener('DOMContentLoaded', e => {

  // let testNode;

  document.getElementById('start-btn').addEventListener('click', async e =>{

    let playerName = document.getElementById('player-name')
    let NumberOfQuestions = document.getElementById('number-of-questions')
    let previousButton = document.getElementById('previous-btn')
    let nextButton = document.getElementById('next-btn')
    let submitButton = document.getElementById('submit-btn')

    if (playerName.value && (+NumberOfQuestions.value) >= 5 && +NumberOfQuestions.value <= 10) {

      const quiz = new Questions();
      quiz.questionArray = await quiz.fetchQuestions(+NumberOfQuestions.value);
      quiz.createQuestionArray();

      //använd för att kolla om det är rätt.
      const game = new Game('axel', 0);
      
      const interface = new Interface(quiz.elementArray);

      const previousQuestion = () => interface.previousQuestion()
      const nextQuestion = () => interface.nextQuestion()
      

      //knapp för att gå bakåt en fråga index = current + 1
      previousButton.addEventListener('click', previousQuestion)

    //Knapp för att gå framåt en fråga index = current - -1
      nextButton.addEventListener('click', nextQuestion)

      let startForm = e.target.parentNode

      submitButton.addEventListener('click', function(){
        //kör funktion som kollar poäng
        //vill du spela igen i question div med en knapp + eventlistener?
        interface.endGame(startForm)
        nextButton.removeEventListener('click', nextQuestion)
        previousButton.removeEventListener('click', previousQuestion)
        this.removeEventListener('click', arguments.callee)
      });

      //tar bort formuläret och visar den första frågan.
      //spara form i variabel och använde igen för att starta om spelet. man kan köra append på 

      startForm.remove();

      interface.newGame()
    }
      
  })
  
    
})

//kolla om obj.multiple_correct_answer === true. ovanligt 1 på 20.


