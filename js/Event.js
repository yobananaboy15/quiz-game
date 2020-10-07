class Event {
    constructor(player, elementArray, correctAnswersArray){

        this.player = player
        this.elementArray = elementArray;
        this.correctAnswersArray = correctAnswersArray;
        console.log(correctAnswersArray)
        this.currentQuestionIndex = 0;
        this.newGame() 
    }

    newGame(){
        
        let startForm = document.getElementById('start-form')

        this.boundNextQuestion = this.nextQuestion.bind(this) 
        this.boundPreviousQuestion = this.previousQuestion.bind(this)
        this.boundEndGame = this.endGame.bind(this, startForm)
        
        startForm.remove();
        
        document.getElementById('question-container').append(this.elementArray[0].questionElement)
        this.showCurrentQuestion()

        this.modifyEventListeners('add'); 
        
    }

    modifyEventListeners(add){ //snygga till funktion om tid finns.
  
        let nextButton = document.getElementById('next-btn')
        let previousButton = document.getElementById('previous-btn')
        let submitButton = document.getElementById('submit-btn')
      
        if(add){

            nextButton.addEventListener('click', this.boundNextQuestion)
            previousButton.addEventListener('click', this.boundPreviousQuestion)
            submitButton.addEventListener('click', this.boundEndGame)

        } else {

            nextButton.removeEventListener('click', this.boundNextQuestion)
            previousButton.removeEventListener('click', this.boundPreviousQuestion)
            submitButton.removeEventListener('click', this.boundEndGame) 
        }     

    }

    showCurrentQuestion(){
        document.getElementById('question-container').firstElementChild.textContent = 'Fråga ' + (this.currentQuestionIndex + 1)
    }


    nextQuestion(){
        
        if (!(this.currentQuestionIndex === this.elementArray.length - 1)){
            this.currentQuestionIndex++
            document.getElementById('question-container').children[1].replaceWith(this.elementArray[this.currentQuestionIndex].questionElement)
            this.showCurrentQuestion()
        }
        
    }

    previousQuestion(){
        
        if(this.currentQuestionIndex){
            this.currentQuestionIndex--
            document.getElementById('question-container').children[1].replaceWith(this.elementArray[this.currentQuestionIndex].questionElement)
            this.showCurrentQuestion()
        }
        
    }

    endGame(startForm){

        this.modifyEventListeners();

        this.checkCorrectAnswers(this.elementArray, this.correctAnswersArray)

        document.getElementById('question-container').firstElementChild.textContent = 'You got ' + this.player.playerPoints + '/' + this.elementArray.length + ' questions right, ' + this.player.playerName + '!';
        document.getElementById('question-container').children[1].remove()

        let btn = document.createElement('button');
        btn.textContent = 'Click here to play again'
        btn.addEventListener('click', e => {
            document.getElementById('question-container').firstElementChild.textContent = "";
            document.getElementById('question-container').append(startForm); 
            e.target.remove()
            
        })
        document.getElementById('question-container').append(btn)
        
    }


    checkCorrectAnswers(collection, answerArr){
    
        let playerAnswersCheckbox = collection.map(element => element.questionElement.querySelectorAll('input'))
        let playerAnswerArray = playerAnswersCheckbox.map(checkboxCollection => Array.from(checkboxCollection, checkbox => checkbox.checked ? true : false))
        
        //Loopa igenom varje array i playerAnswer array --> om samtliga värden i varje array i playerAnswer 
        let testArr = playerAnswerArray.filter((element, index) => {
            for(let i = 0; i < element.length; i++){
                if (!element[i] === answerArr[index][i])
                return false
            }
            return true
        });
 
        this.player.playerPoints = testArr.length    
     }
}