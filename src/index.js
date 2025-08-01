module.exports = function toReadable(number) {
  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const hundreds = {
    1: 'one hundred',
    2: 'two hundred',
    3: 'three hundred',
    4: 'four hundred',
    5: 'five hundred',
    6: 'six hundred',
    7: 'seven hundred',
    8: 'eight hundred',
    9: 'nine hundred',
  };

  if (number <= 99) {
    if (ones[number]) return ones[number];
    const tens = Math.floor(number / 10) * 10;
    const units = number % 10;
    return `${ones[tens]} ${ones[units]}`;
  }

  const hundredDigit = Math.floor(number / 100);
  const remainder = number % 100;
  if (remainder === 0) return hundreds[hundredDigit];
  return `${hundreds[hundredDigit]} ${ones[remainder] || `${ones[Math.floor(remainder / 10) * 10]} ${ones[remainder % 10]}`}`;
};
