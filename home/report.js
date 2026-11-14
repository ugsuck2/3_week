// 문제 11
let numbers11 = [10, 20, 30, 40, 50];
let sum11 = 0;
for(i=0;i<numbers11.length;i++){
  sum11 = sum11 + numbers11[i];
}
console.log(sum11);

// 문제 12   for .. of 해당 객체의 value값을 다 불러오겠다 객체에는 사용할수 없다. 사용하려면 Object.values()를 사용
let scores12 = [80, 70, 90, 60, 100];
let sum12 = 0;
let avg12 = 0;
for(let v12 of scores12){
  sum12 = sum12 + v12;
}
avg12 = sum12/(scores12.length);
console.log(avg12);

// 문제 13
let numbers13 = [3, 8, 12, 7, 15, 20];
for(i=0;i<(numbers13.length);i++)
{
  if((numbers13[i]%2)==0) {   // %와 /차이점
    console.log(numbers13[i]);
  }
  else
    continue;
}

// 문제 14
let scores14 = [45, 80, 65, 90, 30, 75];
for(let v14 of scores14) {
  if(v14>=60){
    console.log(v14);
  }
  else
    continue;
}

// 문제 15
let numbers15 = [1, 2, 3, 4, 5, 6, 7];
numbers15.forEach((value,index)=>{     // for.Each 쓸때 변수는 (값, 인덱스)다 보통 객체가 인덱스:값 으로 이루어져 있기때문에 햇갈린다.
  if((value%2)==1){
    console.log(value);
  }
  // else            for.Each 를 쓸때는 else를 꼭 쓸필요는 없다. 짝수인 경우를 정해서 동작을 줄때 쓴다.
  //   continue;
})

// 문제 16
let scores16 = [55, 90, 40, 85, 70];
for(let i in scores16) {
  if(scores16[i]>=80){
    console.log(i + '인덱스 의 값 :' +scores16[i])
  }
  else {
    continue;
  }
}

// 문제 17. 
let numbers17 = [10, 25, 30, 45, 50];
let sum17 = 0;
for(let v of numbers17) {
  if(v>=30) {
    sum17 = sum17 + 1;
  }
  else
    continue;
}
console.log(sum17);

// 문제 18
let numbers18 = [5, 12, 8, 20, 3, 15];
let big18 = 0;
for(let v of numbers18) {
  if(v>big18) {
    big18 = v;
  }
  else
    continue
}
console.log(big18);

// 문제 19
let scores19 = [90, 75, 60, 85, 100];
scores19.forEach((value,index)=>{
  if(value>=60){
    console.log('합격');
  }
  else {
    console.log('불합격');
  }
})

// 문제 20
let numbers20 = [2, 4, 6, 8, 10];
let arr20=[];
for(i=0;i<numbers20.length;i++){
  arr20[i]=numbers20[i]*3;
}
console.log(arr20);

// 문제 21
let numbers21 = [10, 20, 30, 40, 50];
numbers21.forEach((value,index)=>{
  if(value==30){
    console.log(value);
  }
})

// 문제 22
let scores22 = [50, 80, 90, 40, 100];
for(let i in scores22){
  if(scores22[i]<60){
    console.log(i+'인덱스의 값'+scores22[i]);
  }
  else
    continue;
}

// 문제 23
let numbers23 = [10, 15, 20, 25, 30, 35];
for(let v of numbers23) {
  if((v%2)==0 && (v%5)==0) {
    console.log(v);
  }
}

// 문제 24
let fruits24 = ['사과', '바나나', '포도', '딸기', '수박'];
fruits24.forEach((value,index)=>{
  if((index%2)==0) {
    console.log(value);
  }
})

// 문제 25
let numbers25 = [10, 20, 30, 40, 50];
let arr25 = [];
for(i=numbers25.length;i>0;i--) {
  arr25[5-i] = numbers25[i-1];
}
console.log(arr25);

// 문제 26
let scores26 = [40, 70, 85, 55, 95, 60];
let sum26 = 0;
let avg26 = 0;
let lol = 0;
for(let v of scores26) {
  if(v>=60){
    sum26 = sum26 + v;
    lol++;
  }
  else
    continue;
}
avg26 = sum26/lol;
console.log(avg26);

// 문제 27
let numbers27 = [3, 7, 2, 9, 5];
let small = Infinity;  // Infinity = 무한
numbers27.forEach((value,index)=>{
  if(value<small) {
    small = value;
  }
})
console.log(small);

// 문제 28
let numbers28 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr28 = []
let even = 0;
let odd = 0;
numbers28.forEach((value,index)=>{
  if((value%2)==0) {
    even = value*2
    arr28[index] = even;
  }
  else {
    odd = value*3;
    arr28[index] = odd;
  }
})
console.log(arr28);

// 문제 29 
let names29 = ['철수', '영희', '민수', '지연', '수진'];
for(let i in names29) {
  if(i==1){
    console.log(names29[i]);
  }
  else if(i==3) {
    console.log(names29[i]);
  }
  else
    continue;
}

// 문제 30
let scores30 = [95, 70, 85, 60, 100];
let person = 0;
scores30.forEach((value,index)=>{
  if(value>=80) {
    console.log((index+1)+'번 학생 합격입니다.')
    person = person + 1;
  }
  else {
    console.log((index+1)+'번 학생 불합격입니다.')
  }
})
console.log('합격한 학생은'+person+'명 입니다.')