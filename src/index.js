module.exports = function toReadable (number) {
    var num = number;

    // actual  conversion code starts here
    
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
    
    
    var string = num.toString();

if (num < 0) throw new Error('Negative not supported');

if (num === 0) return 'zero';

//1 - 9
if (num < 20) {
return ones[num];
}

if (string.length === 2) {
if (string[1] === '0') 
return tens[string[0]] + '' + ones[string[1]];
else 
return tens[string[0]] + ' ' + ones[string[1]];
}

//100-999
if (string.length == 3) {
if (string[1] === '0' && string[2] === '0')
return ones[string[0]] + ' hundred';
else
return ones[string[0]] + ' hundred ' + toReadable(+(string[1] + string[2]));
}
    
   
}
 