class Question {

    constructor(questionObj){
        this.questionElement = this.createQuestionElement(questionObj)
    }

    //skapar en div och fyller den med checkboxar och frågorna från det inskickade questionObj från konstruktorn.
    createQuestionElement(questionObj){

        const div = document.createElement('div')
        div.append(questionObj.question)
        div.append(document.createElement('br'))

        Object.keys(questionObj.answers).forEach(key =>{

            if(questionObj.answers[key]){
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox')
                div.append(input)

                //tar 7:e karaktären som är bokstaven för svarsalternativet
                div.append(key[7] + ') ')
            
                div.append(questionObj.answers[key])
            }
        })


        return div;

    }
}