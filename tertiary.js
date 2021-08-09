function isPrimeNumber(num) {
    let flag = true
    for (let i = num - 1; i > 1; i--) {
        console.log(i, num)
        if (num % i === 0) {
            console.log(`${num} dzieli się przez ${i}`)
            flag = false
        }
    }
    return flag
}


function onNumberSubmit(event) {
    console.log("siema siema")
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    console.log(isPrimeNumber(inputNumber.value))
}

const formNumber = document.querySelector("#formNumber")
formNumber.onsubmit = onNumberSubmit

