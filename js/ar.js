const k = parseFloat(prompt('Ввести  номер числа Фібоначі для обч. в  масиві'));

function fibArr(k) {
    let f = [0, 1];
    for (let i = 1; i < k; i++) {
        f.push(f[f.length - 1] + f[f.length - 2]);
    }
    return f[f.length - 1]
}
alert(fibArr(k));
