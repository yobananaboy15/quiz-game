class Game {
    constructor(name, questionData){

        this.player = new Player(name)
        //this.questionArray = questionData; //behövs detta?
        this.correctAnswersArray =  this.createCorrectAnswersArray(questionData)
        this.elementArray = this.createElementArray(questionData)
        this.event = new Event(this.player, this.elementArray, this.correctAnswersArray) 
     
    }

    createElementArray(questionArray){
       
        let elementArr = [];
        for(let question of questionArray){
            elementArr.push(new Question(question))
        }
        return elementArr   
        
    } 
    
    createCorrectAnswersArray (questionData){
        return questionData.map(element => element.correct_answers)
    }


}