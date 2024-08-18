let telega = window.Telegram.WebApp;

telega.expand();
document.addEventListener('click', function(event) {
  const inputField = document.getElementById('summa');
  if (!inputField.contains(event.target)) {
      inputField.blur(); // убирает фокус с input и закрывает клавиатуру
  }
});
document.getElementById('summa').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      this.blur(); // убирает фокус с input и закрывает клавиатуру
  }
});
class NewConverter {
  constructor() {
    this.controlPanel(); // Инициализация панели управления
  }

  controlPanel() {
    const result = document.querySelector(".result");
    result.addEventListener("click", () => {
      const sumInput = document.getElementById("summa");
      const sum = sumInput.value;

      if (sum) {
        console.log("Заполнено");
        this.getData(sum);
      } else {
        alert("Введи сумму");
      }
    });
  }

  getData(sum) {
    const data = { sum };
    this.sendData(data);
  }

  sendData(data) {
    telega.MainButton.textColor = "#FFFFFF";
    telega.MainButton.color = "#2cab37";
    telega.MainButton.setText("Учим бота считать цифры");
    telega.MainButton.show();

    setTimeout(() => {
      telega.sendData(JSON.stringify(data));
    }, 5000);
  }
}

const converter = new NewConverter();
