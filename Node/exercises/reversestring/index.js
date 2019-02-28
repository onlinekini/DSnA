// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const input = Array.from(str);
    var revStr = "";

    for (let i = input.length - 1; i >= 0 ; i-- ) {
        revStr += input[i];
    }
    return revStr;
}

module.exports = reverse;
