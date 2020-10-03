class Interface {
    constructor(arr){
        this.currentQuestion = 0;
        this.elementArray = arr;
    }

    nextQuestion(){
        document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[1].questionElement)
    }

    previousQuestion(){
        document.getElementById('question-container').firstElementChild.replaceWith(this.elementArray[0].questionElement)
    }

    newGame(){
        document.getElementById('question-container').append(this.elementArray[0].questionElement)
    }

    endGame(){

    }

    //hur pratar det här objektet med quiz?
}