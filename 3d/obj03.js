
// js  배열

// 동적으로 처리
/*
    shift           :앞 삭제
    unshift         :앞 추가

    pop             :뒤 삭제
    push            :뒤 추가

*/

let arr =[1,2,3];
console.log(arr);
arr.unshift(44);
console.log(arr);
arr.shift();
console.log(arr);
arr.push(55);
console.log(arr);
arr.pop();
console.log(arr);


// concat 배열 연결 함수

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//[1,2,3,4,5,6]

console.log(arr1.concat(arr2));

arr1 = arr1.concat(arr2);   // 비 파괴적인 함수 사용시 원본은 바꾸려면, 원본에 다시 '저장'

console.log(arr2.concat(arr1));

console.log(arr1.concat(arr1));


/*
    함수 수행

    파괴적 함수      :    함수 실행하면 원본에 영향 주는 함수      
    비파괴적 함수     :   함수 실행하면 원본에 영향 주지 않는 함수  

*/


console.log('-----------------------------------------------')

// 배열 복사 (참조타입변수)


/*
    깊은 복사(deep copy)         : 값 자체를 통으로 새롭게 새로운 곳에 복사
    얕은 복사(shallow copy)      : 들고있는 값만 복사 (바라보는 주소만 복사)   
*/


let a = 10;
let b = a;

console.log(a,b);
b=20;
console.log(a,b);


let arr3 = [1,2,3];
let arr4 = arr3;  // 얕은 복사

console.log(arr3,arr4);

arr3[2] = 4;

console.log(arr3,arr4);  

// 배열의 깊은 복사 하는 방법  
// ... 전개연산자


let arr5 = arr3; // 얕은 복사 (주소만.)
let arr6 = [...arr3]; // 깊은 복사      [...[1,2,4]] 벗겨낸다 > [1,2,4] 
arr3[1] = 333;
console.log(arr3,arr6);
console.log(arr3,arr5);


let x = [1,2,3];
let y = x;        //얕은
let z = [...x];   //깊은

console.log(x,y,z);
x[2] = 888;
console.log(x,y,z);


let q = [10,20,30,...x,40,50];  // let q = [10,20,30,...[1,2,888],40,50]
console.log(q);


//-----------------------------

// splice 함수
// 배열의 특정 위치에 추가, 삭제

// splice(인덱스, 삭제할갯수)
// splice(인덱스, 삭제할갯수, 추가할 값)

// 파괴적인지 비파괴적인지


console.log('-----------------------------------------------');

let arr7 = [1,2,3,4,5];
console.log(arr7);
//arr7 = arr7.splice(1,2);
let temp = arr7.splice(1,2);
arr7.splice(1,2);
console.log(arr7);  // 파괴적인 함수
console.log(temp);  // 리턴값은 자른부분

arr7.push(5);
arr7.push(6);

arr7.unshift(0);
arr7.unshift(1);

console.log(arr7);

//arr7[2] = 20;
arr7.splice(2,1,20);

console.log(arr7);

//---------------------------------------------------------------
console.log('-----------------------------------------------');


let obj = {
    name : '김밥천국',
    menu : '참치김밥'
}

console.log(obj);
obj.menu = '치즈김밥'
console.log(obj);
obj.price = 5000;
console.log(obj);
obj.price = 6500;
console.log(obj);
obj.price = 0; // 존재하는 키값을 0으로 수정
console.log(obj);
delete obj.price; //특정키 자체를 삭제
console.log(obj);

console.log('-----------------------------------------------');

let obj2 = obj;
console.log(obj, obj2);
obj.name = '김밥나라';
console.log(obj, obj2);

let obj3 = structuredClone(obj);  // 깊은 복사 함수
console.log(obj,obj3);
obj.menu = '돈까스김밥';
console.log(obj,obj3);


/*
    obj = obj3
    obj = { name: '김밥나라', menu: '돈까스김밥' } js 객체로 인식 -> 주소가 복사
    
    obj = '{ name: '김밥나라', menu: '돈까스김밥' }' // js 문자형(텍스트)으로 인식
    let obj4 = obj;
    console.log(obj, obj.name);  > 뒤에값이 undefined가 나온다. 텍스트로 인식하기 때문에

*/

//   jsobj 타입 -> text -> jsobj

//   js obj -> text 변환 : JSON.stringify
//   text -> js obj 변환 : JSON.parse

obj = { name: '김밥나라', menu: '돈까스김밥' }

let jsontext = JSON.stringify(obj);
console.log(jsontext);

let newobj = JSON.parse(jsontext);
console.log(newobj);
console.log(newobj.name);

console.log(obj, newobj);
obj.menu = '새우김밥';

console.log(obj, newobj);

let newobj2 = JSON.parse(JSON.stringify(obj));  // 객체 깊은 복사
