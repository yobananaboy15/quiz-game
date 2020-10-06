class Game {
    constructor(name, questionData){
        this.name = name;
        this.points = 0;
        this.rawQuestionData = questionData
        this.elementArray = new Questions(questionData);
        //skapa interface-klass?
        new Interface (this.elementArray) //skicka in questiondata?

    }
    //behövs denna klass?
    calculatePoints(){
        //kan samarbeta med checkcorrect answers.s
    }

    checkCorrectAnswers(collection, answerArr){
       //snygga till allt här.
       
       let playerAnswersCheckbox = collection.map(element => element.questionElement.querySelectorAll('input'))

       let playerAnswerArray = playerAnswersCheckbox.map(checkboxCollection => Array.from(checkboxCollection, checkbox => checkbox.checked ? true : false))

       let newAnswerArray = answerArr.map(element => {
           return Object.values(element).map(value => value === 'true' ? true : false)
       })

       //loopa igenom varje array i playerAnswer array --> om samtliga värden i varje array i playerAnswer 
       let testArr = playerAnswerArray.filter((element, index) => {
           for(let i = 0; i < element.length; i++){
               if (!element[i] === newAnswerArray[index][i])
               return false
           }
           return true
       });

       return testArr.length
       
    }


}