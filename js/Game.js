class Game {
    constructor(name, questionData, startForm){

        this.player = new Player(name)
        this.correctAnswersArray =  this.createCorrectAnswersArray(questionData)
        this.elementArray = this.createElementArray(questionData)
        this.event = new Event(this.player, this.elementArray, this.correctAnswersArray, startForm)
     
    }

    createElementArray(questionArray){
       
        return questionArray.map(element => new Question(element))            
    } 
    
    createCorrectAnswersArray (questionData){

        //Skapar en array som endast innehåller objekt med rätt svar för varje fråga. Kör sedan map på den arrayen för att skapa omvandla alla 'true/false'-strängar till booleans.
        let answerArr = questionData.map(element => element.correct_answers);
        return answerArr.map(element => Object.values(element).map(value => value === 'true' ? true : false)) 
    }


}