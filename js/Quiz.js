class Quiz{
    constructor(){
        this.elementArray = [];
        this.questionArray = []
        for(let i = 0; i < fetcheddataarray.length; i++){
            this.questionArray.push(new Question)
        }
    }

    correct(collection, answerArr){

    }

    async fetchQuestions(numberOfQuestions){

        await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

        console.log('hej')

    }

    updateInterface(){
        //gör detta till egen klass?
    }


}