export class NumberFormatter {
    
  generateWithLeadingZeroes(number: number, maxLength: number, prefix: string) {
    let numberLength = number.toString().length;
    let leadingZeros = '';

    while (numberLength < maxLength) {
      leadingZeros = leadingZeros + '0';
      numberLength++;
    }

    const referenceNumber = prefix + '-' + leadingZeros + number.toString();

    return referenceNumber;
  }
}
