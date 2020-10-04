class Interface {
    constructor(arr){
        this.currentQuestionIndex = 0;
        this.elementArray = arr;
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

    endGame(){

    }

    //hur pratar det här objektet med quiz?
}