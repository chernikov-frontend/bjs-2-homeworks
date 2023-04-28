"use strict"

// Задача 1
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b ** 2 - 4 * a * c;

  if (discr === 0) {
    arr.push(-b / (2 * a));
  } else if (discr > 0) {
    arr.push((-b + Math.sqrt(discr)) / (2 * a), (-b - Math.sqrt(discr)) / (2 * a));
  }

  return arr;
}


// Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let result;

  // проверка
  (percent == +percent) ? percent = +percent : result = false;
  (contribution == +contribution) ? contribution = +contribution : result = false;
  (amount == +amount) ? amount = +amount : result = false;
//  не понял как вывести ошибку с номером строки , если введен неверный параметр, в тесте эта проверка не отражается 

  let percentMonths = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthPay = loanBody * (percentMonths + (percentMonths / (((1 + percentMonths) ** countMonths) - 1)))
  let totalAmount = monthPay * countMonths;
  result = +totalAmount.toFixed(2)
  return result;
}

// console.log(calculateTotalMortgage(10, 0, 50000, 12))