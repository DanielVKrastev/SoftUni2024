function calc() {
    const a = document.getElementById('num1');
    const b = document.getElementById('num2');
    const output = document.getElementById('sum');

    const sum = Number(a.value) + Number(b.value);

    output.value = sum;
}
