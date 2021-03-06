document.addEventListener('DOMContentLoaded', e => {

  document.getElementById('start-btn').addEventListener('click', async e =>{


    let numberOfQuestions = +document.getElementById('number-of-questions').value
    let playerName = document.getElementById('player-name').value
    //ordna så att felmeddelande skrivs ut om man inte skrivit rätt.
    if (playerName && (numberOfQuestions >= 5 && numberOfQuestions <= 10)) {
      let startForm = document.getElementById('start-form');
      startForm.remove();
      let top = document.getElementById('current-question-div')
      top.textContent = 'Loading questions...' 
      const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV&limit=${numberOfQuestions}`)
      const questionData = await response.json();
      top.textContent = '';

      const game = new Game(playerName, questionData, startForm);

    }
      
  })
  
})


