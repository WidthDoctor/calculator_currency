let telega= window.Telegram.WebApp;
telega.expand();

class NewConverter {
  constructor() {
    this.getCity();
    // this.getKursFromBot();
    this.controlPanel();
  }
controlPanel(){
    const result = document.querySelector('.result');
    result.addEventListener('click',(e)=>{
      const { value: sum } = document.getElementById("summa");
    const { value: proc } = document.getElementById('proc');
    const { value: city } = document.getElementById("city");
    const { value: type } = document.getElementById('type');
    const { value: valuta } = document.getElementById('valuta');

    if (sum && proc ) {
      console.log('Заполнено');
      this.getData(sum,proc,city,type,valuta);
    }else {
      alert('Заполни все поля')
    }
    })
}
  getCity() {
    const city = document.getElementById("city");
    console.log(city.value);
    city.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  }

  getData(sum,proc,city,type,valuta) {
    const data = { sum, proc, city, type, valuta };
    console.log(data);
    this.sendData(data)
  }
  sendData(data){
    telega.MainButton.textColor = "#FFFFFF";
    telega.MainButton.color="#2cab37"
    telega.MainButton.setText("Учим бота считать цифры");
    telega.MainButton.show();
    setTimeout(() => {
      telega.sendData(JSON.stringify(data));
  }, 5000);
 }
}

const converter = new NewConverter();
