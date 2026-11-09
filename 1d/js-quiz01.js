let year = 1000; // 출생년도
let num = 1; // 주민등록번호 뒷자리 첫 번째 숫자
if( year < 2000 && year > 1900) {
    if (num == 1) {
        year = 2026 - year + 1
        console.log('결과:'+year+'남자입니다.')
    } else if(num==2) {
        year = 2026 - year + 1
        console.log('결과:'+year+'여자입니다.')
    } else {
        console.log('잘못된 입력입니다.');
    }
}
else if( year >= 2000 && year <2026) {
    if (num == 3) {
        year = 2026 - year + 1
        console.log('결과:'+year+'남자입니다.')
    } else if(num==4) {
        year = 2026 - year + 1
        console.log('결과:'+year+'여자입니다.')
    } else {
        console.log('잘못된 입력입니다.');
    }
} else {
    console.log('잘못된 입력입니다.');
}


year = 2100;
num = 3;
let age = 2026 - year + 1
if(year < 2000 && year > 1900 && num==1) {
    console.log('결과:'+age+'남자입니다.')
} else if(year < 2000 && year > 1900 &&num==2) {
    
    console.log('결과:'+age+'여자입니다.')
} else if(year >= 2000 && year <2026 &&num==3) {
    
    console.log('결과:'+age+'남자입니다.')
} else if(year >= 2000 && year <2026 &&num==4) {
    year = 2026 - year + 1
    console.log('결과:'+age+'여자입니다.')
} else if(year>2026||year<1900) {
    console.log('잘못된 입력입니다.')
} else if( year < 2000 && num>=3) {
    console.log('잘못된 입력입니다.')
} else if ( year >= 2000 && num <3) {
    console.log('잘못된 입력입니다.')
}