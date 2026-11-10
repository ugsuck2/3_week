

// object
// obj

// 배열, 객체타입

// 배열  변수값들을 모아서 관리하겠다. scores, scoreArr, scoreArray, scoreList
let scoreArr=[10,50,100,90,45];
console.log(scoreArr);

// index 
//[10,50,100,90,45]
// 0  1  2  3  4
// 배열변수[인덱스]
console.log(scoreArr[2]);
console.log(scoreArr[4]);

let sum = 0;
for(let i=0; i<5; i++) {
    sum = sum + scoreArr[i];
}
console.log('평균 : '+sum/5);


//----------------------------------------


// 배열 100개 1~100
let arr = []; // 빈 배열
arr[50]=50;
console.log(arr);

let arr100 = new Array(100);
console.log(arr100); //100칸 짜리 빈배열 index : 0 ~ 99
sum = 0;
for(i=0;i<arr100.length;i++){  //범위식에 length쓰면 편하다.
    arr100[i] = i + 1;
}
console.log(arr100.length); // 해당 배열의 길이
console.log(arr100);


//--------------------------------------------
console.log('------------------------------------------------------------')

// 배열의 값에 접근하기

let scores = [11,22,33,44,55]; //5명의 점수
//for문 + index 접근
for(let i=0;i<scores.length;i++) {
    console.log(scores[i]);
}

// for in   -> index 값 획득
for(let i in scores){
    console.log(i +' 인덱스 위치의 값 : '+ scores[i]);
}

// for of  -> 배열에 있는 값 획득 (value)

for(let v of scores){
    console.log(v +' : 해당 인덱스의 value');
}

// 배열 구조에서 제공하는 함수 forEach
scores.forEach( (index, value)=>{
    console.log(index + ' : ' + value);
})
