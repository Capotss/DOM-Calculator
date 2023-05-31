var res = ''
var lastInput = ''
var resetState = false

function clearScreen() {
    res = ""
    document.getElementById('result').value = 0
    console.log('clearing')

}

function screenUpdate(e) {
    if (resetState == true) {
        if (!isNaN(e)) {
            clearScreen()
            resetState = false
        }
        if (isNaN(e)){
            resetState = false
        }
    }
    if (e == '-' || e == '+' || e == '*' || e == '/') {
        if (lastInput == '+' || lastInput == '-' || lastInput == '*' || lastInput == '/') {
            return
        }
    }
    res += e
    document.getElementById('result').value = res
    lastInput = e
}

function calculate() {
    let a = eval(res || null)
    res = String(a)
    document.getElementById('result').value = a
    resetState = true
}

