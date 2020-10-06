class Game {
    constructor(name, questionData){
        this.name = name;
        this.points = 0;
        this.rawQuestionData = questionData
        this.elementArray = new Questions(questionData);
        //de här sakerna har egentligen inget med det här att göra.
        this.currentQuestionIndex = 0;
        this.newGame() //man skulle kunna köra den här i Interface-konstruktorn

    }

    setEventListeners(){
        //sätter eventlisteners som kör sakerna nedan.
        let nextButton = document.getElementById('next-btn')
        let previousButton = document.getElementById('previous-btn')
        let submitButton = document.getElementById('submit-btn')

        nextButton.addEventListener('click', nextQuestion)
        previousButton.addEventListener('click', previousQuestion)
        submitButton.addEventListener('click', function(){
            return kek;
        });


    }

    newGame(){
        this.setEventListeners();
        document.getElementById('question-container').append(this.elementArray[0].questionElement)
    }


    
    nextQuestion(){
        
        //const nextQuestion = () => nextQuestion()


        if (!(this.currentQuestionIndex === this.elementArray.length - 1)){
            document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[this.currentQuestionIndex + 1].questionElement)
            this.currentQuestionIndex++
        }
        
    }

    previousQuestion(){

        const previousQuestion = () => previousQuestion()

        previousButton.addEventListener('click', previousQuestion)
           //knapp för att gå bakåt en fråga index = current + 1
        //kopplad till eventlistener på knapp
        

        
        if(this.currentQuestionIndex){
            document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[this.currentQuestionIndex - 1].questionElement)
            this.currentQuestionIndex--
        }
        
    }

    endGame(elem){

        

        submitButton.addEventListener('click', function(){
            let newArr = quiz.questionArray.map(element => element.correct_answers)
            let result = game.checkCorrectAnswers(quiz.elementArray, newArr)
            document.getElementById('question-container').append('You got ' + result + '/' + quiz.elementArray.length + ' questions right!')
            //Dela upp i två funktioner
            interface.endGame(startForm)
            nextButton.removeEventListener('click', nextQuestion)
            previousButton.removeEventListener('click', previousQuestion)
            this.removeEventListener('click', arguments.callee)
          });

        

        let btn = document.createElement('button');
        btn.textContent = 'Click here to play again'
        btn.addEventListener('click', e => {
            document.getElementById('question-container').firstElementChild.replaceWith(elem);
            document.getElementById('question-container').lastChild.remove(); //snygga till den här funktionen.

        })
        document.getElementById('question-container').firstElementChild.replaceWith(btn)
        
    }

    checkCorrectAnswers(collection, answerArr){
        //snygga till allt här.
        
        let playerAnswersCheckbox = collection.map(element => element.questionElement.querySelectorAll('input'))
 
        let playerAnswerArray = playerAnswersCheckbox.map(checkboxCollection => Array.from(checkboxCollection, checkbox => checkbox.checked ? true : false))
 
        let newAnswerArray = answerArr.map(element => {
            return Object.values(element).map(value => value === 'true' ? true : false)
        })
 
        //loopa igenom varje array i playerAnswer array --> om samtliga värden i varje array i playerAnswer 
        let testArr = playerAnswerArray.filter((element, index) => {
            for(let i = 0; i < element.length; i++){
                if (!element[i] === newAnswerArray[index][i])
                return false
            }
            return true
        });
 
        return testArr.length
        
     }


}