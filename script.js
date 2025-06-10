let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let div = document.getElementById("divColor");
let chance = 10;
let guessNumber = [];
let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);

msg2.textContent = "Number of chance to guess: " + chance;

function play() {
  let guessNum = Number(document.getElementById("guessNum").value);

  if (guessNum < 1 || guessNum > 50) {
    alert("Please Type number between 1 and 50");
  } else {
    if (guessNum > answer) {
      div.classList.add("wrong");
      msg1.textContent = "Your Number is too hight";
      chance--;
      msg2.textContent = "Number of chance to guess: " + chance;
      guessNumber.push(guessNum);
      msg3.textContent = "Guessed unmbers are:" + guessNumber;
      document.getElementById("guessNum").value = " ";
    } else if (guessNum === answer) {
      msg1.textContent = "Congradulation You Won This Game";
      div.classList.add("right");
    } else {
      div.classList.add("wrong");
      msg1.textContent = "Your Number is too Low";
      chance--;
      msg2.textContent = "Number of chance to guess: " + chance;
      guessNumber.push(guessNum);
      msg3.textContent = "Guessed unmbers are:" + guessNumber;
      document.getElementById("guessNum").value = "";
    }
    if (chance <= -1) {
      document.querySelector(".btn-guess").disabled = true;
      alert("Your Chance is empty, Plz Restart the game");
      restart();
    }
  }
}

function restart() {
  answer = Math.floor(Math.random() * 50) + 1;
  document.querySelector(".btn-guess").disabled = false;
  console.log(answer);
  document.getElementById("guessNum").value = "";
  div.classList.remove("wrong");
  div.classList.remove("right");
  msg1.textContent = "Your Number is too hight";
  chance--;
  msg1.textContent = "Your Game is Successfuly Reatart";
  chance = 10;
  msg2.textContent = "Number of chance to guess: " + chance;
  guessNumber = [];
  msg3.textContent = "Guessed unmbers are:" + guessNumber;
}
