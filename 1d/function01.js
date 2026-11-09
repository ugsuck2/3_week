

//function 함수

// 동작, 기능을 나타낸 코드 뭉치
// 매개변수, 리턴

/*
    function 함수명 (매개변수) {
        실행코드;
        실행코드;
        실행코드;
        return 리턴값;
    }

    옵션
    매개변수  O  X
    return   O  X


*/
// 매개변수 x  return x
function func01(){
    console.log('func01 함수 실행됨');
    console.log('함수 실행 코드 01');
}
//함수호출 (call)
func01();

// 매개변수 o return x
function func02(name) {
    name = String(name)
    console.log('func02 함수 실행됨')
    console.log('매개변수 :'+name);

}
func02('광석');
func02(2525);
func02('코카콜라')
func02(4545623)

function func02_2 (a,b) {
    console.log('func02_2 함수 실행됨')
    console.log('매개변수 a :'+ a);
    console.log('매개변수 b :'+ b);
}

func02_2(10,20)
func02_2('콜라','사이다')

//매개변수 x return o

function func03() {
    console.log('func03 함수 실행됨');
    console.log('func03 리턴 500 나갈거임');
    return 500;
}

console.log(func03())

let temp = func03()

console.log('func03()의 return 값 : '+ temp);

console.log('func01의 리턴값 :' + func01());

//매개변수 o return o
function func04(n) {
    console.log('func04 함수 실행');
    console.log('넘겨준값을 * 10 해서 돌려줌');
    return n*10;

}
func04(10)

let result = func04(5);

console.log(result);
console.log(func04(123));

