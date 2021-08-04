const currOne = document.getElementById('currency-one');
const amOne = document.getElementById('amount-one');
const currTwo = document.getElementById('currency-two');
const amTwo = document.getElementById('amount-two');

const swapRate = document.getElementById('swap');
const rateSign = document.getElementById('rate');

currOne.addEventListener('change', calc);
currTwo.addEventListener('change', calc);
amOne.addEventListener('input', calc);
amTwo.addEventListener('input', calc);

function calc() {
    const currencyOne = currOne.value;
    const currencyTwo = currTwo.value;

    // fetch the Api
    fetch(`https://v6.exchangerate-api.com/v6/d87aa33755085eb0fd1fe320/latest/${currencyOne}`)
.then(res => res.json())
.then(data => {
    // console.log(data);
    const rate = data.conversion_rates[currencyTwo];
    rateSign.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

    amTwo.value = (amOne.value * rate).toFixed(2);
    });
}

swapRate.addEventListener('click', ()=> {
    const swap = currOne.value;
    currOne.value = currTwo.value;
    currTwo.value = swap;
calc()
 });



calc()
