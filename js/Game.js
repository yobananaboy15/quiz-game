class Game {
    constructor(name, questionData){

        this.player = new Player(name)
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
        let answerArr = questionData.map(element => element.correct_answers);
        return answerArr.map(element => {
            return Object.values(element).map(value => value === 'true' ? true : false)
        }) 
    }


}