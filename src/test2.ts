// Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора.
//  В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. 
// Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

let var1 = -1;
let var2 =-0.5;
let operator="*";
let result;

if (operator =="*") {
     result = var1*var2;
} 
else if (operator =="/") {
     result = var1/var2;
} 
else if (operator =="+") {
     result = var1+var2;
} 
else if (operator =="-") {
     result = var1-var2;
} 
else {
     result = "Invalid operator!";
}

console.log(result);