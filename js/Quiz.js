class Quiz{
    constructor(){
        this.elementArray = [];
        this.questionArray = []; //hur får jag den att vänta här innan den går vidare. kör en asynkron metod i konstruktorn? kör i testbranch.
        this.correctAnswersArray = [];
        }
    }

    createQuestionArray(){ //skapa även correct questions array här?
        //flytta for-loopen ovan hit.
        for(let i = 0; i < this.questionArray.length; i++){
            this.elementArray.push(new Question(this.questionArray[i]))
        }   

    correct(collection, answerArr){
        //min array är inte en html-collection utan full med question-objekt. lös?
    }

    async fetchQuestions(numberOfQuestions){

        //kolla exakt hur detta fungerar under the hood!
        const data = await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
        .then(response => response.json())
        .then(data => data)
        
        console.log(data);

        return data;

    }

}