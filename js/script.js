document.addEventListener('DOMContentLoaded', e => {

  // let testNode;

  document.getElementById('start-btn').addEventListener('click', async e =>{

    let playerName = document.getElementById('player-name')
    let NumberOfQuestions = document.getElementById('number-of-questions')
    let previousButton = document.getElementById('previous-btn')
    let nextButton = document.getElementById('next-btn')
    let submitButton = document.getElementById('submit-btn')

    //ordna så att felmeddelande skrivs ut om man inte skrivit rätt.
    if (playerName.value && (+NumberOfQuestions.value) >= 5 && +NumberOfQuestions.value <= 10) {

      const quiz = new Questions();
      //hära den här datan utanför objetet och initiera question med den.
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
        let newArr = quiz.questionArray.map(element => element.correct_answers)
        let result = game.checkCorrectAnswers(quiz.elementArray, newArr)
        document.getElementById('question-container').append('You got ' + result + '/' + quiz.elementArray.length + ' questions right!')


        //game.checkCorrectAnswers() //ordna en array som innehåller objekt med rätt svar. kör filter - length för att få fram antal frågor som man svarat rätt på.
        //kör funktion som kollar poäng
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


