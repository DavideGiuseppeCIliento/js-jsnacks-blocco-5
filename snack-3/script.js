const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// const newArray = numbers.map((numero) => (numero += 1));

// console.log(newArray);

function myMapFilter(array, funzione) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const newCurrent = funzione(current, i); // altro valore
    if (newCurrent !== undefined) {
      result.push(newCurrent);
    }
  }
  return result;
}

function myFilter(array, funzione) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const daInserire = funzione(current, i); // bool
    if (daInserire) {
      result.push(current);
    }
  }
  return result;
}

const arr = [1, 5, 7, 2, 0];

const newArray = myMapFilter(arr, function (current, index) {
  if (index % 2 !== 0) {
    // dispari
    return undefined;
  } else {
    return current + 1;
  }
}); // [2, 6, 8, 3, 1]

console.log(newArray);
