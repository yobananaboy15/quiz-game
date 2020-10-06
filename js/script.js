document.addEventListener('DOMContentLoaded', e => {

  // let testNode;

  document.getElementById('start-btn').addEventListener('click', async e =>{

    let NumberOfQuestions = +document.getElementById('number-of-questions').value
    let playerName = document.getElementById('player-name').value
    //ordna så att felmeddelande skrivs ut om man inte skrivit rätt.
    if (playerName && (NumberOfQuestions >= 5 && NumberOfQuestions <= 10)) {
      //lägg in try-catch
      const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
      const questionData = await response.json();

      const game = new Game('axel', questionData);
    }
  

      // let startForm = e.target.parentNode

    
      //tar bort formuläret och visar den första frågan.
      //spara form i variabel och använde igen för att starta om spelet. man kan köra append på 

      // startForm.remove();

      // interface.newGame()
   
      
  })
  
})


