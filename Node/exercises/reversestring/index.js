// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let revStr = "";
    for (let char of str ) {
        revStr = char + revStr 
    }
    return revStr;

    //return str.split('').reverse().join('');
}

module.exports = reverse;
