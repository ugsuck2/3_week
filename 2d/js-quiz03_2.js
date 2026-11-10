const getMealByTime=(realTime)=> {
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
console.log('출력값 :'+' '+getMealByTime(8)); 