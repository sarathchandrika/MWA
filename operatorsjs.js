function calculate() {
    let a = (document.getElementById("num1").value * 1);
    let b = (document.getElementById("num2").value * 1);
    document.getElementById("sum").innerHTML = a + b;
    document.getElementById("sub").innerHTML = a - b;
    document.getElementById("mul").innerHTML = a * b;
    document.getElementById("div").innerHTML = a / b;
    document.getElementById("mod").innerHTML = a % b;
}