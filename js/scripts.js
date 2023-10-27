function creditCard(inputBox) {
    let ccNumber = inputBox.split("");
    let ccNumberLeftOver = [];
    let ccNumberDoubled = [];
    let doubleDigits = [];
    let sum = 0;
    for (let i = 0; i < ccNumber.length; i += 2) {
        ccNumberLeftOver.push(ccNumber[i]);
    }
    
    for (let i = 1; i < ccNumber.length; i += 2) {
        ccNumberDoubled.push(ccNumber[i] * 2);
    }

    for (i = 0; i < ccNumberDoubled.length; i += 1) {
        if (ccNumberDoubled[i] > 9) {
            let numString = ccNumberDoubled[i].toString();
            for (let index = 0; index < numString.length; index += 1) {
                sum += parseInt(numString[index]);
            }
            doubleDigits.push(sum);
        } else {
            doubleDigits.push(ccNumberDoubled[i]);
        }
    }
    result = doubleDigits.concat(ccNumberLeftOver);
    for (let i = 0; i < result.length; i++){
        sum += parseInt(result[i]);
      }
}

window.addEventListener() {
document.getElementById
}