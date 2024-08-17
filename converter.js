let telega= window.Telegram.WebApp;
telega.expand();

class NewConverter {
  constructor() {
    this.controlPanel();
  }
controlPanel(){
    const result = document.querySelector('.result');
    result.addEventListener('click',(e)=>{
      const { value: sum } = document.getElementById("summa");

    if (sum) {
      console.log('Заполнено');
      this.getData(sum);
    }else {
      alert('Введи сумму')
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

  getData(sum) {
    const data = { sum };
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
