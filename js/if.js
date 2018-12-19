 const m = parseFloat(prompt('Ввести порядковий номер числа Фібоначі для обч. в  рекурсії'));
 
 function fibRec(m) {
  if (m <= 1) {
   return m;
  }
  else {
   return fibRec(m - 1) + fibRec(m - 2);
  }
 }
 alert(fibRec(m));