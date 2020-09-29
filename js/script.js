fetch("https://quizapi.io/api/v1/questions?limit=20", {
  headers: {
    "X-Api-Key": "4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV",
  }
})
.then(response => response.json())
.then(data => {
 
})

//När användaren väljer hur många frågor som ska visas kör man en prompt som låt denne skriva in 5-10. Det värde används i query-strängen som skickas i requesten.

//vilka klasser bör jag ha? var ska jag hålla reda på poäng?

//kolla om obj.multiple_correct_answer === true. ovanligt 1 på 20.

//det lättast är nog att skapa ett helt objekt med html som skickas in i diven. //hur ska svaren samlas? hur ska de kopplas till frågor?

//ska knapparna för att submitta, gå fram/bak finnas från början?


//API-token: 4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV

//Lägg till eventlyssnare på knapp


// 1. användaren skriver in hur många frågor (5-10)
// 2. Värdet skickas som argument till någon metod tillhörande en klass som instansierats.
// 3. Metoden hämtar frågorna genom fetch.
// 4. Någon annan metod sätter ihop en lång html string med en checkbox för varje alternativ som inte är null.
// 5. Användaren trycker på submit för att number 4 ska upprepas.
