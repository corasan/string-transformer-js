var shuffle = require('shuffle-array');

module.exports = function(string) {
    var arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');
    var new_arr = string.split('').map(function(letter) {
        return letter.replace(letter, shuffle(arr).slice(0,5).join().replace(/,/g, ''));
    });
    return new_arr.join().replace(/,/g, '');
}
