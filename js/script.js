fetch("https://quizapi.io/api/v1/questions?limit=5", {
  headers: {
    "X-Api-Key": "4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV",
  }
})
.then(response => response.json())
.then(data => {
    console.log(data)
})


//API-token: 4LvQ5A2OeL1eEM1blNXiuf8L9UwUD8v4xhdceYnV