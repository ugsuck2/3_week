


function func01() {
    console.log("func01()");  
}

func01();
//let const  보통 함수지정은 let 말고 const를 쓴다.
const func02 = function(){
    console.log("func02()");  
}
func02();

const func03 = function func0303() { //function 뒤에는 가짜함수명 인식을 못한다.
    console.log("func03()");  
}
func03();

// 화살표 함수 (Arrow Function)
const func04 = () => {    //function() 대신에 ()=>
    console.log("func04()");  
}
func04();

//-----------------------------------

// 함수선언 + 매개변수

function func05(a,b) {
    console.log('func05() '+a+' '+b);
}
func05(10,20);
func05('A',"b");

const func06 = function (a,b) {
    console.log('func06() '+a+' '+b);
}

func06('A',"b");
func06('12',"34");

const func07 = function func0707 (a,b) {
    console.log('func07() '+a+' '+b);
}
func07('56',"78");

const func08 = (x,y) => {
    console.log('func08() ' +x+' ' +y);
}
func08('hello','hi');

//----------------------------함수 리턴
//두개의 매개변수를 받아서 두 값의 합을 반환(return)
function sum1(a,b){
    let sum = a+ b;
    return sum
}
console.log(sum1(10,20));

const sum2 = function(a,b){
    return a + b;
}
console.log(sum2(123,20));

const sum3 = (a,b) => {
    return a + b;
}
console.log(sum3(123,220));

// 화살표함수 => 뒤에 중괄호 없이 바로 나오는 값을 return 값으로 인식처리
const sum4 = (x,y)=> x+y;
//{return x+y;}
console.log(sum4(20,18));

const sum5 =()=>1+2+3+4+5;
console.log(sum5());


//----------------------------------

//호이스팅
//var   ----> let const

console.log(w);
var w = 30;

r = 3000;
var r;
console.log(r);

//함수 호이스팅
    //function check(){
check();
function check(){
    console.log('check()!!!');
}

//일회용함수 
(function onetime(){
    let x =10;
    let y = 20;
    console.log('일회용 함수');
})(); //일회용 함수 선언 및 바로호출(즉시사용)


{
    let x =10;
    let y = 20;
    console.log('일회용 함수');
}