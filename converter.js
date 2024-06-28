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
  getKursFromBot() {
    if (window.Telegram.WebApp) {
      const initData = window.Telegram.WebApp.initDataUnsafe;
      console.log("Received data:", initData);
    } else {
      console.error("Telegram WebApp не доступен.");
    }
  }
}

const converter = new NewConverter();
