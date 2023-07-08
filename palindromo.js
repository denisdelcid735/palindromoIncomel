var payloadElement = document.getElementById('payload');
var checkButton = document.getElementById('check');
function isPalindrome(payload) {
    var bodyDiv = document.getElementById('bodyDiv');
    var palindromes = [];
    var palindromeCount = 0;
    // Dividir la cadena en palabras individuales usando la coma como separador
    var words = payload.split(',');
    // Verificar si cada palabra es un palíndromo
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var formattedWord = word.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
        var isPalindrome_1 = true;
        for (var i = 0; i < formattedWord.length / 2; i++) {
            if (formattedWord[i] !== formattedWord[formattedWord.length - 1 - i]) {
                isPalindrome_1 = false;
                break;
            }
        }
        if (isPalindrome_1) {
            palindromes.push(word);
            palindromeCount++;
        }
    }
    if (bodyDiv !== null) {
        if (palindromes.length > 0) {
            bodyDiv.innerHTML += "\n        <h2>Resultado</h2>\n        <p>La cantidad de palindromos son: ".concat(palindromeCount, " y los palindromos son: ").concat(palindromes.join(', '), "</p>\n      ");
        }
        else {
            bodyDiv.innerHTML += "\n        <h2>Resultado</h2>\n        <p>No existen palindromos</p>\n      ";
        }
    }
}
checkButton === null || checkButton === void 0 ? void 0 : checkButton.addEventListener('click', function () {
    if (payloadElement !== null) {
        isPalindrome(payloadElement.value);
    }
});
