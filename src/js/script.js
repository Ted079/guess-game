const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
  if (tries >= 5) {
    return alert('Игра окончена');
  } else if (num === secretNum) {
    alert("Вы угадали число");
    tries = 5;
  } else {
    alert("Вы НЕ угадали число");
    tries++;
  }
}
console.log(secretNum);

const riddle = {
  question: "Висит груша нельзя скушать ",
  correctAnswear: "лампочка",
  hints: ["это съедобное", "это фрукт"],
  tries: 4,
  checkAnswear(str) {
    if(this.tries < 1){ 
      return alert('Игра окончена');
    }else if(str.toLowerCase().includes(this.correctAnswear)){
      this.tries = 0;
      alert('Вы угадали');
    }else{
      alert('Вы НЕ угадали');
      this.tries--;

      const hint = this.hints[this.tries === 2 ? 0 : 1];

      if(this.tries === 2 || this.tries === 1){
        alert('Подсказка: ' + hint);
      }
      
    }
    console.log(this.tries)
  },
};

window.onload = function () {
  document.getElementById("riddle").innerText = riddle.question;
};

function check() {
  const input = document.getElementsByTagName("input")[0];

  const guessAnswear = input.value;

  if (guessAnswear) {
    riddle.checkAnswear(guessAnswear);
  }
}











