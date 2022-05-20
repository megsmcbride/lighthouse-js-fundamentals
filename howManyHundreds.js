function howManyHundreds(num) {
  if (num % 100 === 0) {
    return num / 100;
  } else {
    const remainder = num % 100;
    return (num - remainder) / 100;
  }
}

console.log(howManyHundreds(1030))