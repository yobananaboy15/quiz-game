document.addEventListener('DOMContentLoaded', e => {

//knapp för att gå bakåt en fråga index = current + 1
document.getElementById('previous-btn').addEventListener('click', e =>{
  document.getElementById('question-container').firstChild.replaceWith(quiz.elementArray[0].questionElement)
})

//knapp för att gå framåt en fråga index = current - -1
document.getElementById('next-btn').addEventListener('click', e =>{
  //hur ska jag hålla reda på var spelaren är? gameobjekt? game.currentQuestion + 1
  document.getElementById('question-container').firstChild.replaceWith(quiz.elementArray[1].questionElement)
  //game.currentQuestion ++
})
  
  //Alla dessa tre grejer ska ligga på startknappen
  let quiz = new Questions();
  //let game = new Game('axel', 0);


//startar spelet genom att ta bort första formuläret, lägga till den första frågan.

document.getElementById('start-btn').addEventListener('click', async e =>{

  //om kravet om namn och antal rundor uppfylls.
    e.target.parentNode.remove();

    quiz.questionArray = await quiz.fetchQuestions(5);
    quiz.createQuestionArray();

    document.getElementById('question-container').append(quiz.elementArray[0].questionElement)
})
  

    //använd den här arrayen för att instansiera Interface och GameState. 


    //ordna en submitknapp som visas på sista frågan.



    // FINNS OCKSÅ TRUE OCH FALSE-FRÅGOR. SE TILL ATT MAN BARA KAN VÄLJA ETT ALTERNATIV DÅ.
 
 

  //visa första frågan. datan måste vara inlagd i createQuestionarray iinnan det drar igång.
  
  //jag ska ha ett inputfält med regex som kollar om det är 5-10. Även en knapp där man trycker på starta spel. Den startar spelet genom att 
  //initiera ett quiz-objekt och kör alla metoder i quiz.

  //KLASSER KAN KOMMUNICERA DYNAMISKT GENOM ATT TA EMOT ANDRA OBJEKT SOM ARGUMENT.
})




//När användaren väljer hur många frågor som ska visas kör man en prompt som låt denne skriva in 5-10. Det värde används i query-strängen som skickas i requesten.

//vilka klasser bör jag ha? var ska jag hålla reda på poäng?

//kolla om obj.multiple_correct_answer === true. ovanligt 1 på 20.

//det lättast är nog att skapa ett helt objekt med html som skickas in i diven. //hur ska svaren samlas? hur ska de kopplas till frågor?

//ska knapparna för att submitta, gå fram/bak finnas från början?


//API-token: 4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV

//Lägg till eventlyssnare på knapp

//hur ska man kunna skapa en html-collection om frågorna visas en i taget? Det betyder att varje frågehtml-objekt måste finnas kvar hela tiden. Appenda 
//skapa en array med html-objekt som man visar på begäran. man behöver inte ta bort dem, bara visa det nuvarande, modifiera det etc. hur funkar referens med html-objekt?


// 1. användaren skriver in hur många frågor (5-10)
// 2. Värdet skickas som argument till någon metod tillhörande en klass som instansierats.
// 3. Metoden hämtar frågorna genom fetch.
// 4. Någon annan metod sätter ihop en lång html string med en checkbox för varje alternativ som inte är null. Det här objektet finns sparat i en array och uppdateras.
// 5. Användaren trycker på submit för att number 4 ska upprepas.
// Vad händer här? Var ska man kolla om det är rätt eller fel? Koppla ihop checkboxarna med de rätta svaren i frågeobjektet.
//hur ska man sen kolla de rätta svaren?
