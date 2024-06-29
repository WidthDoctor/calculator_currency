let telega= window.Telegram.WebApp;
telega.expand();
class NewConverter {
  constructor() {
    this.getCity();
    this.getSum();
    this.getKursFromBot();
  }

  getCity() {
    const city = document.getElementById("city");
    console.log(city.value);
    city.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  }

  getSum() {
    const sumInput = document.getElementById("summa");
    sumInput.addEventListener("keyup", (e) => {
      let sendValue = sumInput.value;
      this.getKursFromBot(sendValue)
      console.log(sendValue);
    });
  }
  getKursFromBot(data){
    telega.sendData(data)
 }
}

const converter = new NewConverter();
