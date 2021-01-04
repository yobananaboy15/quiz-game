class Game {
    //Bör även innehålla vilken fråga spelaren befinner sig på.
    constructor(name, questionData, startForm){

        this.player = new Player(name)
        this.correctAnswersArray =  this.createCorrectAnswersArray(questionData)
        this.elementArray = this.createElementArray(questionData)
        this.event = new Event(this.player, this.elementArray, this.correctAnswersArray, startForm) //This should not happen here
     
    }

    createElementArray(questionArray){
       
        return questionArray.map(element => new Question(element))            
    } 
    
    createCorrectAnswersArray (questionData){

        //Skapar en array som endast innehåller objekt med rätt svar för varje fråga. Kör sedan map på den arrayen för att skapa omvandla alla 'true/false'-strängar till booleans.
        let answerArr = questionData.map(element => element.correct_answers);
        return answerArr.map(element => Object.values(element).map(value => value === 'true' ? true : false)) 
    }

    checkCorrectAnswers(elementArray, answerArr){

        //This belongs in the game class.
        
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


}