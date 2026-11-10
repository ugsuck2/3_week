function getMealByTime1(realtime){
    
        if(realtime>=6&&realtime<=10) {
            return '아침'
        }
        else if(realtime>10&&realtime<=14) {
            return '점심'
        }
        else if(realtime>=17&&realtime<=20) {
            return '저녁'
        }
        else if(realtime>=21&&realtime<=23) {
            return '야식'
        }
        else {
            return '금식'
        }
    
}

console.log('출력값 :'+' '+getMealByTime1(18)); 


const getMealByTime2=(realtime)=> {
        if(realtime>=6&&realtime<=10) {
            return '아침'
        }
        else if(realtime>10&&realtime<=14) {
            return '점심'
        }
        else if(realtime>=17&&realtime<=20) {
            return '저녁'
        }
        else if(realtime>=21&&realtime<=23) {
            return '야식'
        }
        else {
            return '금식'
        }
}
console.log('출력값 :'+' '+getMealByTime2(18)); 

const getMealByTime3=(realtime)=> {
    switch(true) {
        case(realtime>=6&&realtime<=10) :
            return '아침'
            break;
        case(realtime>10&&realtime<=14) :
            return '점심'
            break;
        case(realtime>=17&&realtime<=20) :
            return '저녁'
            break;
        case(realtime>=21&&realtime<=23) :
            return '야식'
            break;
        default :
            return '금식'
            break;
    }
}    
console.log('출력값 :'+' '+getMealByTime3(18)); 
console.log(getMealByTime1(5)); //출력값 : 금식
console.log(getMealByTime2(8)); //출력값 : 아침
console.log(getMealByTime3(13)); //출력값 : 점심
console.log(getMealByTime3(16)); //출력값 : 금식
console.log(getMealByTime2(19)); //출력값 : 저녁
console.log(getMealByTime1(22)); //출력값 : 야식
console.log(getMealByTime1(2)); //출력값 : 금식