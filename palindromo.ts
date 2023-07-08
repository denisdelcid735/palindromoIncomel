const payloadElement: HTMLInputElement | null = document.getElementById('payload') as HTMLInputElement;
const checkButton = document.getElementById('check');

function isPalindrome(payload: string) {
  const bodyDiv: HTMLElement | null = document.getElementById('bodyDiv');

  let palindromes: string[] = [];
  let palindromeCount = 0;

  // Dividir la cadena en palabras individuales usando la coma como separador
  let words = payload.split(',');

  // Verificar si cada palabra es un palíndromo
  for (let word of words) {
    let formattedWord = word.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let isPalindrome = true;

    for (let i = 0; i < formattedWord.length / 2; i++) {
      if (formattedWord[i] !== formattedWord[formattedWord.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome) {
      palindromes.push(word);
      palindromeCount++;
    }
  }

  if (bodyDiv !== null) {
    if (palindromes.length > 0) {
      bodyDiv.innerHTML += `
        <h2>Resultado</h2>
        <p>La cantidad de palindromos son: ${palindromeCount} y los palindromos son: ${palindromes.join(', ')}</p>
      `;
    } else {
      bodyDiv.innerHTML += `
        <h2>Resultado</h2>
        <p>No existen palindromos</p>
      `;
    }
  }
}

checkButton?.addEventListener('click', () => {
  if (payloadElement !== null) {
    isPalindrome(payloadElement.value);
  }
});
