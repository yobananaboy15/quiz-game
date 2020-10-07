class Question {

    constructor(questionObj){
        this.questionElement = this.createQuestionElement(questionObj)
    }

    //Funktion som skapar en div och fyller den med checkboxar och frågorna från det inskickade questionObj från konstruktorn.
    createQuestionElement(questionObj){

        const div = document.createElement('div')
        div.append(questionObj.question)
        div.append(document.createElement('br'))

        //skapar en array bestående av nycklarna från svarsalternativ-propertyn i questionobj.
        Object.keys(questionObj.answers).forEach(key =>{

            //lägger till checkbox med svarsalternativ för varje key som inte ger värdet null.
            if(questionObj.answers[key]){
                let innerDiv = document.createElement('div')
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox')
                innerDiv.append(input)

                //tar 7:e karaktären som är bokstaven för svarsalternativet
                //div.append(key[7] + ') ')
            
                innerDiv.append(questionObj.answers[key])
                
                div.append(innerDiv)
            }
        })

        return div;

    }
}