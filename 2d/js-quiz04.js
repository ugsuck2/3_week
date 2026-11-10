//문제 1. [for문]
let scores = [10, 20, 30, 40, 50];
for(i=0;i<5;i++) {
    console.log(scores[i]);
}

//문제 2. [for문]
let numbers = [5, 10, 15, 20, 25];
for(i=0;i<5;i++) {
    console.log(numbers[i]*2);
}

//문제 3. [for문]
let scores3 = [70, 80, 90, 60, 100];
for(i=0;i<5;i++) {
    console.log((i+1)+'번'+scores3[i]);
}

//문제 4. [for문]
let numbers4 = [1, 2, 3, 4, 5];
for(i=4;i>=0;i--) {
    console.log(numbers4[i]);
}

//문제 5. [for...in]
let fruits = ['사과', '바나나', '포도', '딸기'];
for(let i in fruits){
    console.log(fruits[i]);
}

//문제 6. [for...in]
let fruits6 = ['사과', '바나나', '포도', '딸기'];
for(let i in fruits6) {
    i = Number(i)
    console.log((i+1)+':'+fruits6[i]);
}

//문제 7. [for...of]
let prices = [1000, 2000, 3000, 4000];
for(let i of prices) {
    console.log(i);
}

//문제 8. [for...of]
let numbers8 = [3, 6, 9, 12, 15];
for(let i of numbers8) {
    console.log(i+10);
}

//문제 9. [forEach]
let scores9 = [50, 60, 70, 80, 90];
scores9.forEach((value,index)=>{
    console.log(value + ' : ' + index);
})

//문제 10. [forEach]
let names = ['김철수', '이영희', '박민수'];
names.forEach((name,number)=>{
    console.log((number+1) + '번 ' + name)
})