class Event {
    constructor(player, elementArray, correctAnswersArray, startForm){

        this.player = player
        this.elementArray = elementArray;
        this.correctAnswersArray = correctAnswersArray;
        this.currentQuestionIndex = 0;
        this.startForm = startForm;
        this.newGame() 
    }

    newGame(){    
        
        //Förebereder eventlisteners och sätter dem.
        this.boundNextQuestion = this.nextQuestion.bind(this) 
        this.boundPreviousQuestion = this.previousQuestion.bind(this)
        this.boundEndGame = this.endGame.bind(this, this.startForm)
        this.modifyEventListeners('add');     
        
        //Uppdaterar UIn så att användaren kan se spelknapparna och den första frågan och numret på den nuvarande frågan.
        document.getElementById('button-div-wrapper').classList.remove('remove-display-class')
        document.getElementById('question-container').append(this.elementArray[0].questionElement)
        this.showCurrentQuestion()

    }

    modifyEventListeners(add){ 
        

        
        //Lägger till eller tar bort listeners

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
        document.getElementById('question-container').firstElementChild.textContent = 'Fråga ' + (this.currentQuestionIndex + 1) + '/' + this.elementArray.length
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

    endGame(){

        //Gör knapparna osynliga, tar bort eventlisteners från knapparna och kollar hur många rätt användaren fått.
        document.getElementById('button-div-wrapper').classList.add('remove-display-class')
        this.modifyEventListeners();
        this.checkCorrectAnswers(this.elementArray, this.correctAnswersArray)

        //Tar bort den nuvarande frågan och visar bara hur många poängen användaren fått.
        document.getElementById('question-container').children[1].remove()
        document.getElementById('question-container').firstElementChild.textContent = 'You got ' + this.player.playerPoints + '/' + this.elementArray.length + ' questions right, ' + this.player.playerName + '!';
        
        //Skapar en  knapp som låter användaren starta om spelet. Om användaren trycker på knappen appendas startForm och användaren kommer tillbaka till ursprungsläget.
        let btn = document.createElement('button');
        btn.textContent = 'Click here to play again'
        btn.addEventListener('click', e => {
            document.getElementById('question-container').firstElementChild.textContent = "";
            document.getElementById('question-container').append(this.startForm); 
            e.target.remove()
            
        })

        //Appendar restart-knappen
        document.getElementById('question-container').append(btn)
        
    }


    checkCorrectAnswers(elementArray, answerArr){
        
        //Kör map på elementArray och skapar en array med nodelists bestående av alla input-element för respektive fråga.
        //Mappar sedan den arrayen och gör om varje nodelist till en array med boolean värden som motsvarar status på checkboxarna.
        let playerAnswersCheckbox = elementArray.map(element => element.questionElement.querySelectorAll('input'))
        let playerAnswerArray = playerAnswersCheckbox.map(checkboxCollection => Array.from(checkboxCollection, checkbox => checkbox.checked ? true : false))
        
        //Loopa igenom varje array i playerAnswersArray (spelarens icheckade rutor i respektive fråga). 
        //om samtliga värden i playerAnswer motsvarar värdena på samma index i motsvarande array i answerArr skickar den tillbaka arrayen.
        let testArr = playerAnswerArray.filter((element, index) => {
            for(let i = 0; i < element.length; i++){
                if (!element[i] === answerArr[index][i])
                return false
            }
            return true
        });
 
        this.player.playerPoints = testArr.length    
     }

     createStartForm(){

     }
}