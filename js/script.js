document.addEventListener('DOMContentLoaded', e => {

  // let testNode;

  document.getElementById('start-btn').addEventListener('click', async e =>{

    let NumberOfQuestions = +document.getElementById('number-of-questions').value
    let playerName = document.getElementById('player-name').value
    //ordna så att felmeddelande skrivs ut om man inte skrivit rätt.
    if (playerName && (NumberOfQuestions >= 5 && NumberOfQuestions <= 10)) {
      //lägg in try-catch
      const questionData = await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
      const data = await response.json();
      const game = new Game('axel', data);
    }

    // let playerName = document.getElementById('player-name')
    // let NumberOfQuestions = document.getElementById('number-of-questions')
    // let previousButton = document.getElementById('previous-btn')
    // let nextButton = document.getElementById('next-btn')
    // let submitButton = document.getElementById('submit-btn')

    

      // const quiz = new Questions();
      //hära den här datan utanför objetet och initiera question med den.
      // quiz.questionArray = await quiz.fetchQuestions(+NumberOfQuestions.value);
      // quiz.createQuestionArray();

      //använd för att kolla om det är rätt.
      
      
      // const interface = new Interface(quiz.elementArray);

      // const previousQuestion = () => interface.previousQuestion()
      // const nextQuestion = () => interface.nextQuestion()
      

      //knapp för att gå bakåt en fråga index = current + 1
      // previousButton.addEventListener('click', previousQuestion)

    //Knapp för att gå framåt en fråga index = current - -1
      // nextButton.addEventListener('click', nextQuestion)

      // let startForm = e.target.parentNode

      // submitButton.addEventListener('click', function(){
      //   let newArr = quiz.questionArray.map(element => element.correct_answers)
      //   let result = game.checkCorrectAnswers(quiz.elementArray, newArr)
      //   document.getElementById('question-container').append('You got ' + result + '/' + quiz.elementArray.length + ' questions right!')


        //game.checkCorrectAnswers() //ordna en array som innehåller objekt med rätt svar. kör filter - length för att få fram antal frågor som man svarat rätt på.
        //kör funktion som kollar poäng
      //   interface.endGame(startForm)
      //   nextButton.removeEventListener('click', nextQuestion)
      //   previousButton.removeEventListener('click', previousQuestion)
      //   this.removeEventListener('click', arguments.callee)
      // });

      //tar bort formuläret och visar den första frågan.
      //spara form i variabel och använde igen för att starta om spelet. man kan köra append på 

      // startForm.remove();

      // interface.newGame()
   
      
  })
  
    
})

//kolla om obj.multiple_correct_answer === true. ovanligt 1 på 20.


