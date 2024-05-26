function rot13(str) {
    return str.split('').map(function(char) {
        if (char.match(/[A-Z]/)) {
            var code = char.charCodeAt(0);
            var shiftedCode = code + 13;

            if (shiftedCode > 90) {
                shiftedCode = 65 + (shiftedCode - 91);
            }

            return String.fromCharCode(shiftedCode);
        } else {
            return char;
        }
    }).join('');
}


rot13("SERR PBQR PNZC");