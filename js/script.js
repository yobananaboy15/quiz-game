async function fetchQuestions (numberOfQuestions){

  await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
  .then(response => response.json())
  .then(data => {
      console.log(data)
  })

  console.log('hej')

}

fetchQuestions(10)
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
