module.exports = function toReadable(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  function convertDozens(number) {
    if (number < 10) {
      return ones[number];
    }
    if (number >= 10 && number < 20) {
      return teens[number - 10];
    }
    if (number >= 20) {
      if (number % 10) {
        return `${dozens[Math.floor(number / 10)]} ${ones[number % 10]}`;
      }
      return `${dozens[Math.floor(number / 10)]}`;
    }
  }

  function convertHundreds(number) {
    if (!number) return `zero`;
    if (number > 99) {
      if (number % 100) {
        return `${ones[Math.floor(number / 100)]} hundred ${convertDozens(number % 100)}`;
      }
      return `${ones[Math.floor(number / 100)]} hundred`;
    }
    return convertDozens(number);
  }

  return convertHundreds(number);
}
