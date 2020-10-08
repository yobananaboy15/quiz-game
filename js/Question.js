class Question {

    constructor(questionObj){
        this.questionElement = this.createQuestionElement(questionObj)
    }

    //Funktion som skapar en div och fyller den med checkboxar och frågorna från det inskickade questionObj från konstruktorn.
    createQuestionElement(questionObj){

        const outerDiv = document.createElement('div')
        const questionDiv = document.createElement('div')
        questionDiv.textContent = questionObj.question
        outerDiv.append(questionDiv);

        //Skapar en array bestående av nycklarna från svarsalternativ-propertyn i questionobj.
        Object.keys(questionObj.answers).forEach(key =>{

            //lägger till checkbox med svarsalternativ för varje key som inte ger värdet null.
            if(questionObj.answers[key]){
                let innerDiv = document.createElement('div')
                let checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox')
                innerDiv.append(checkbox)
                innerDiv.append(questionObj.answers[key])
                outerDiv.append(innerDiv)
            }
        })
        return outerDiv;

    }
}