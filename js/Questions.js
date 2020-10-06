class Questions{
    constructor(questionArray){
        this.elementArray = this.createQuestionArray(questionArray);
    }

    createQuestionArray(questionArray){ 
        let elementArr = [];
        for(let question of questionArray){
            elementArr.push(new Question(question))
        }
        return elementArr   
    }

}