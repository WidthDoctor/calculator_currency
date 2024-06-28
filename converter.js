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
      console.log(sendValue);
    });
  }
 getKursFromBot(){
   const tg = window.Telegram.WebApp;
   const data = { message: "Hello, Bot!" };
            tg.sendData(JSON.stringify(data));
   tg.ready();
 }
}

const converter = new NewConverter();
