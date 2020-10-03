class Questions{
    constructor(){
        //lägg player här?
        this.elementArray = [];
        this.questionArray = []; //hur får jag den att vänta här innan den går vidare. kör en asynkron metod i konstruktorn? kör i testbranch.
        this.correctAnswersArray = [];
        //skapa interface-objekt här?
    }


    createQuestionArray(){ //skapa även correct questions array här?
        //flytta for-loopen ovan hit. detta måste göras när datan är laddad.
        for(let i = 0; i < this.questionArray.length; i++){
            this.elementArray.push(new Question(this.questionArray[i]))
        }   
    }

    CheckCorrectAnswers(collection, answerArr){
        //kolla html objekten eller skapa separat objekt som bara har svaren?
        //kontrollera en fråga i taget? använd en node som bara har checkboxarna som barn, typ en div
        //flytta till game?
    }

    async fetchQuestions(numberOfQuestions){

        const data = await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
        .then(response => response.json())
        .then(data => data);
        
        return data;

    }

}