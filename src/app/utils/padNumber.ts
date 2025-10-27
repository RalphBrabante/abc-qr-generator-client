function padNumber(num: number, totalLength: number): string {
  return num.toString().padStart(totalLength, '0');
}


export default padNumber;