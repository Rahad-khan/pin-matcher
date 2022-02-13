function generateRandomNumber() {
  const randomNumber = Math.round(Math.random() * 10000);
  const randomNumberString = randomNumber + "";
  if (randomNumberString.length == 4) {
    document.getElementById("display-generate-number").value = randomNumber;
  } else {
    generateRandomNumber();
  }
}
document.getElementById("calc-buttons").addEventListener("click", function (e) {
  const buttonVAlue = e.target.innerText;
  const typedNumbers = document.getElementById("display-typed-number");
  if (isNaN(buttonVAlue)) {
    if (buttonVAlue == "C") {
      typedNumbers.value = "";
    } else if (buttonVAlue == "<") {
      const typedText = typedNumbers.value;
      var substratLastChar = typedText.slice(0, -1);
      typedNumbers.value = substratLastChar;
    }
  } else {
    const previousNumber = typedNumbers.value;
    const newNumber = previousNumber + buttonVAlue;
    typedNumbers.value = newNumber;
  }
});
document.getElementById("is-matching").addEventListener("click", function () {
  const generateNumber = document.getElementById(
    "display-generate-number"
  ).value;
  const displayNumber = document.getElementById("display-typed-number").value;
  const notifySucess = document.getElementById("notify-success");
  const notifyFail = document.getElementById("notify-fail");
  if (generateNumber == displayNumber) {
    notifySucess.style.display = "block";
    notifyFail.style.display = "none";
  } else {
    notifySucess.style.display = "none";
    notifyFail.style.display = "block";
  }
});
