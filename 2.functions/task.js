function getArrayParams(...arr) {
  if (isNaN(...arr)) {
    return null;
  }
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i]
    }
    sum += arr[i];
  }

  let result = { 
    min: min, 
    max: max, 
    avg: +(sum / arr.length).toFixed(2) }
  
  return result;
}


function summElementsWorker(...arr) {
  if (isNaN(...arr)) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (isNaN(...arr)) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i]
    }
  }
  
  let result = max - min;
  return result;
}

function differenceEvenOddWorker(...arr) {
  if (isNaN(...arr)) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0) ? sumEvenElement += arr[i] : sumOddElement += arr[i];
  };

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (isNaN(...arr)) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);

    if (resultFunc > maxWorkerResult) maxWorkerResult = resultFunc;
  }
  
  return maxWorkerResult;
}
