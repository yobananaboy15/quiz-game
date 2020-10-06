class Interface {
    constructor(arr){
        this.currentQuestionIndex = 0;
        this.elementArray = arr;
        //kör alla metoder som sätter eventlisteners här? 
        this.nextQuestion()
        //ha en metod som sätter alla listeners? 
        //behövs ens den här klassen?
    }

    nextQuestion(){

        if (!(this.currentQuestionIndex === this.elementArray.length - 1)){
            document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[this.currentQuestionIndex + 1].questionElement)
            this.currentQuestionIndex++
        }
        
    }

    previousQuestion(){
        if(this.currentQuestionIndex){
            document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[this.currentQuestionIndex - 1].questionElement)
            this.currentQuestionIndex--
        }
        
    }

    newGame(){
        document.getElementById('question-container').append(this.elementArray[0].questionElement)
    }

    endGame(elem){
        let btn = document.createElement('button');
        btn.textContent = 'Click here to play again'
        btn.addEventListener('click', e => {
            document.getElementById('question-container').firstElementChild.replaceWith(elem);
            document.getElementById('question-container').lastChild.remove(); //snygga till den här funktionen.

        })
        document.getElementById('question-container').firstElementChild.replaceWith(btn)
        
    }

    //hur pratar det här objektet med quiz?
}