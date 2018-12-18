 const n = parseFloat(prompt('Ввести порядковий номер числа Фібоначі для обчислення в циклі'));

 function fibLoop(n) {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
   let nex = first + second;
   first = second;
   second = nex;
  }
  return second;
 }
 alert(fibLoop(n));
 