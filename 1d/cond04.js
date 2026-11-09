

// 조건문의 중첩


// if()  {
//     if(){}
//     else {}

// } else {
//     if () {}
// }

/*
    수면시작시간

    21시 기준
        이전 -> 일찍
        이후 -> 늦게

    실제수면시간
    
    8시간 기준
        적게
        많이

    일찍 적게
    일찍 많이
    늦게 적게
    늦게 많이    
*/

let gobt = 22;
let st = 9;

if (gobt<21) {    //일찍
    if(st<8){//적게
        console.log('일찍 적게');
    } else { // 많이
        console.log('일찍 많이');
    }

} else {  //늦게
    if(st<8){//적게
        console.log('늦게 적게');
    } else { // 많이
        console.log('늦게 많이');
    }
}

if ( gobt <= 21 && st >= 8){
    console.log('일찍 많이');
} else if (gobt <=21 && st <=8){
    console.log('일찍 적게');
} else if( gobt >=21 && st >=8){
    console.log('늦게 많이');
} else {
    console.log('늦게 적게');
}


let point = 90;
//0~100

if(point>=50&&point<=100)
    console.log('잘했다');
else if(point<50&&point>=0)
    console.log('아쉽다');
else
    console.log('점수오류');

//먼저 정상범위를 필터링 하고 -> 비교진행
if( point>=0&&point<=100){
    if(point>=50)
        console.log('잘했다');
    else
        console.log('아쉽다');
} else {
    console.log('점수오류');
}