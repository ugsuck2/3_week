let dice = 3; //주사위 1~6


//dice : 1~6 만 가능하다가 보장됨
if (dice == 1)
    console.log('1칸전진');
else if(dice == 2)
    console.log('2칸전진');
else if(dice == 3)
    console.log('3칸전진');
else if(dice == 4)
    console.log('4칸전진');
else if(dice == 5)
    console.log('5칸전진');
else if(dice == 6)
    console.log('6칸전진');
//밑과 수행결과가 동일


//dice가 1~8이라면 마지막이 달라짐
if (dice == 1)
    console.log('1칸전진');
else if(dice == 2)
    console.log('2칸전진');
else if(dice == 3)
    console.log('3칸전진');
else if(dice == 4)
    console.log('4칸전진');
else if(dice == 5)
    console.log('5칸전진');
else 
    console.log('6칸전진');

//

if(dice == 1) {}
if(dice == 2) {}
if(dice == 3) {}
if(dice == 4) {}
if(dice == 5) {}
if(dice == 6) {}
//하나하나를 다 검사하기 때문에 처리가 비효율적이다.

//조건식 -> 최종적으로 true false 논리형 결과
if ( dice > 10){
}

let result = dice ==3;
if(result){}
if(result == true){}
if(result == false){}
if(!(result==true)){}

if(dice>0&&dice<=6){} // 1~6  보장조건
if( dice < 1 || dice > 6){} //1~6범위를 벗어나면

if( !(dice < 1 || dice > 6)){}
if( (dice < 1 || dice > 6) == false ){}

//---------------------------------------------
//switch (비교하려는대상){}

dice = 6 ;
switch(dice){
    case 1:          //dice == 1
        console.log('case 1');
        break;
    case 2:          //dice == 2
        console.log('case 2');
        break;
    case 3:          //dice == 3
        console.log('case 3');
        break;
    case 4:          //dice == 4
        console.log('case 4');
        break;
    case 5:          //dice == 5
        console.log('case 5');
        break;
    case 6:          //dice == 6
        console.log('case 6');
        break;
    default: // else
        console.log('주사위 숫자가 아님');   
        break;
}

//---------------------------------------
console.log('----------------------');
/*
    출근시간 대비 해야할 일
    8시 청소
    9시 회의
    10시 업무
    11시 외근


*/
let showTime = 8;

if (showTime == 8){
    //청소 회의 업무 외근
} else if(showTime == 9){
    //회의 업무 외근
} else if(showTime == 10){
    //업무 외근
} else {
    //외근
}

//8.5?
if ( showTime <=8){
    //청소 회의 업무 외근
}
else if(showTime<=9){}
else if(showTime<=10){}
else if(showTime<=11){}
else{} //결근처리

//조건식을 쓸때 위에서 부터 아래로 범위가 좁아지게 해야한다.
//논리적 오류 존재
if ( showTime >8){    // showTime > 11 순서로 10 9 8
    //청소 회의 업무 외근
}
else if(showTime>9){}
else if(showTime>10){}
else if(showTime>11){}
else{} //결근처리

if (showTime <= 8){
    //청소
}
if (showTime <= 9){
    //회의
}
if (showTime <= 10){
    //업무
}
if (showTime <= 11){
    //외근
}

switch(showTime) {
    case 8:
        //청소
    case 9:
        //회의
    case 10:
        //업무
    case 11:
        //외근
}

switch(showTime) {
    case 8:
        //청소
        //회의
        //업무
        //외근
        break;
    case 9:
        //회의
        //업무
        //외근
        break;
    case 10:
        //업무
        //외근
        break;
    case 11:
        //외근
        //break;
}


