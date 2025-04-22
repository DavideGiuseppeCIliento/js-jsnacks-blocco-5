const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const stampaNomi = () => {
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    console.log(currentName);
  }
};

stampaNomi();
