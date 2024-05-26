function palindrome(str) {
    let cleaned = str.replace(/[^A-Za-z0-9]/g, '');
    
    cleaned = cleaned.toLowerCase();
    
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

palindrome("eye");