class Questions{
    constructor(){
        //lägg player här?
        this.elementArray = [];
        this.questionArray = []; //hur får jag den att vänta här innan den går vidare. kör en asynkron metod i konstruktorn? kör i testbranch.
    }


    createQuestionArray(){ //skapa även correct questions array här?
        //flytta for-loopen ovan hit. detta måste göras när datan är laddad.
        for(let i = 0; i < this.questionArray.length; i++){
            this.elementArray.push(new Question(this.questionArray[i]))
        }   
    }

    async fetchQuestions(numberOfQuestions){

        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
        const data = await response.json();
        return data;

    }

}