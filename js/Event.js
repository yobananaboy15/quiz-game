class Event {
    constructor(player, elementArray, correctAnswersArray){

        this.player = player
        this.elementArray = elementArray;
        this.correctAnswersArray = correctAnswersArray;
        this.currentQuestionIndex = 0;
        this.newGame() 
    }

    modifyEventListeners(kek){ //snygga till funktion om tid finns.
  
        let nextButton = document.getElementById('next-btn')
        let previousButton = document.getElementById('previous-btn')
        let submitButton = document.getElementById('submit-btn')
      
        if(kek){

            nextButton.addEventListener('click', this.boundNextQuestion)
            previousButton.addEventListener('click', this.boundPreviousQuestion)
            submitButton.addEventListener('click', this.boundEndGame)

        } else {

            nextButton.removeEventListener('click', this.boundNextQuestion)
            previousButton.removeEventListener('click', this.boundPreviousQuestion)
            submitButton.removeEventListener('click', this.boundEndGame) 
        }     

    }

    newGame(){
        
        let startForm = document.getElementById('start-form')

        this.boundNextQuestion = this.nextQuestion.bind(this) 
        this.boundPreviousQuestion = this.previousQuestion.bind(this)
        this.boundEndGame = this.endGame.bind(this, startForm)
        
        startForm.remove();
        
        document.getElementById('question-container').append(this.elementArray[0].questionElement)
        this.showCurrentQuestion()

        this.modifyEventListeners('kek'); //där här måste fixas
        
    }


    nextQuestion(){
        
        if (!(this.currentQuestionIndex === this.elementArray.length - 1)){
            this.currentQuestionIndex++
            document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[this.currentQuestionIndex].questionElement)
            this.showCurrentQuestion()
        }
        
    }

    previousQuestion(){
        
        if(this.currentQuestionIndex){
            this.currentQuestionIndex--
            document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[this.currentQuestionIndex].questionElement)
            this.showCurrentQuestion()
        }
        
    }

    endGame(startForm){

        this.modifyEventListeners();

        let result = this.checkCorrectAnswers(this.elementArray, this.correctAnswersArray)
        
        document.getElementById('question-container').append('You got ' + result + '/' + this.elementArray.length + ' questions right!')
        
        //console.log(this.restartForm)

        let btn = document.createElement('button');
        btn.textContent = 'Click here to play again'
        btn.addEventListener('click', e => {
            document.getElementById('question-container').firstElementChild.replaceWith(startForm); //ändra jävla restartform
            document.getElementById('question-container').lastChild.remove(); //snygga till den här funktionen.

        })
        document.getElementById('question-container').firstElementChild.replaceWith(btn)
        
    }

    showCurrentQuestion(){
        document.getElementById('question-container').firstElementChild.replaceWith('Fråga ' + (this.currentQuestionIndex + 1))
    }


    checkCorrectAnswers(collection, answerArr){
    
        let playerAnswersCheckbox = collection.map(element => element.questionElement.querySelectorAll('input'))
        let playerAnswerArray = playerAnswersCheckbox.map(checkboxCollection => Array.from(checkboxCollection, checkbox => checkbox.checked ? true : false))
        
        //loopa igenom varje array i playerAnswer array --> om samtliga värden i varje array i playerAnswer 
        let testArr = playerAnswerArray.filter((element, index) => {
            for(let i = 0; i < element.length; i++){
                if (!element[i] === answerArr[index][i])
                return false
            }
            return true
        });
 
        return testArr.length
        
     }
}