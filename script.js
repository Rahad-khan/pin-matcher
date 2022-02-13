function generateRandomNumber() {
  const randomNumber = Math.round(Math.random() * 10000);
  const randomNumberString = randomNumber + '';
  if (randomNumberString.length == 4) {
      document.getElementById("display-number").value = randomNumber;
  } else {
      console.log(randomNumber)
    generateRandomNumber()
  }
};

