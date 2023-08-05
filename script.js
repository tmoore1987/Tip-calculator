
const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip');
const calculateBtn = document.getElementById('calculate');
const totalSpan = document.getElementById('total');
const clearBtn = document.getElementById('clear')


const calculateTotal = () => {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (tipValue/100);
    totalSpan.innerText = totalValue.toFixed(2)
}

const clearAll = () => {
    totalSpan.innerText = ''
}

//event listener
calculateBtn.addEventListener('click', calculateTotal)
clearBtn.addEventListener('click', clearAll)
















































