const userInput = document.querySelector("#numberInput")
const baseCurrencySelect = document.querySelector("#baseCurrency")
const targetCurrencySelect = document.querySelector("#targetCurrency")
const resultField = document.querySelector("#resultField")
let unitValue;
runEventListeners()

function runEventListeners(){
    userInput.addEventListener("keydown",changeResult)
    baseCurrencySelect.addEventListener("change",changeResult)
    targetCurrencySelect.addEventListener("change",changeResult)
}




async function getRates(){
    baseCurrency = baseCurrencySelect.value
    targetCurrency = targetCurrencySelect.value
    
    await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=eG56bvBVMtNslMzFQvoRcoPFIS5nBX7uS0wsiKbm&currencies=${targetCurrency}&base_currency=${baseCurrency}`)
    .then((response) => response.json())
    .then((data)=>{
        unitValue = data.data[`${targetCurrency}`];
        
    } 
    );
    return unitValue
}



async function changeResult(){
    let rate = await getRates();
    let userAmount = userInput.value;

    let result = rate*userAmount;
    resultField.value = result;
    
}




async function refreshCurrency(){
    let newRate = await getRates()
    let userAmount = userInput.value;
    let result = newRate*userAmount;
    resultField.value = result;
    

}