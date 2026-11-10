function sumEvenNumbers(n) {
  let sum = 0;
  for( let i = 1; i <= n; i++) {
    if(i % 2 == 0) {
      sum = sum + i;
    }
    else {
      continue;
    }
  }
  console.log(sum);
  return(sum);
}

sumEvenNumbers(12);