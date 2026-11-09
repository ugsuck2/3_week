//반복문
// Iteration 반복문
// iter

for ( let i = 1; i <=10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log('배고프다'+i);
}

for ( let i = 1; i <=10; i++) {
    console.log('반복문 재밋다'+i);
}

console.log('반복문 for 끝남');

let sum = 0;
for ( let i = 1; i <=100; i++) {
    sum = sum + i
}
console.log(sum);

// 단순 몇회 반복
// for ( i=1;i<=5;i++) 

// for (i=5;i>0;i--) 둘이 같다

for (i=1;i<10;i++){
    console.log('다이어트'+i+'일차');
}

sum = 0;
for ( i=1; i<=10000; i=i**2) {
    sum = sum + i;
}
console.log(sum);