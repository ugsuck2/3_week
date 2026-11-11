

// js 배열 관련 함수

// 기본배열
let arr = [10,20,30,40];

//반목문 for, for in, for of , forEach


//  1) map

// 배열안의 요소들을 하나씩 접근하면서 반복실행, 수행후 return 기능

arr.map(()=> {
    // 단순반복용...요소의 숫자만큼
    console.log('arr map');
})

// 요소로 반복 : forEach
arr.forEach(()=>{
    console.log('arr forEach()');
})

arr.map((item)=>{  //매개변수 1개짜리 콜백함수 선언  -> item 매개변수에는 배열 요소의 값 주입
    console.log('arr map()'+item);
})

arr.map((item,index)=>{  //매개변수 2개짜리 콜백함수 선언  -> item : 값, index : 인덱스(순번) 주입
    console.log('arr map()'+item+' '+index);
})

let result1 = arr.map(()=>{
                        return 99;
                    })
console.log(result1)      

let result2 = arr.map((item)=>{
                    console.log(item); //return이 없음 > undefined
                    })
console.log(result2);

let result3 = arr.map((item)=>{
                                return (item+100);    
                                })
console.log(result3);

let result4 = arr.map((item,index)=>{
                        return 'index :' + index +' ' + 'value :' +item;
});
console.log(result4);

let menuArr = ['라면','우동','김밥'];

let result5 = menuArr.map ((menu,index)=> {
                                        return '<p> ' + (index + 1) + '번.' + ' '+ menu + '</p>'
                                    })
console.log(result5);      


let result6 = menuArr.map ((menu,index)=> '<p> ' + (index + 1) + '번.' + ' '+ menu + '</p>')
// ()=>{return xxx;}   ()=> xxx                                    
console.log(result6);                                  


// 2) filter
// 실행 결과값(return)이 참인 요소만 모아서 return
arr = [10,20,30,40];

let result7 = arr.filter((value)=>{
    return true;
})
console.log(result7);


let result8 = arr.filter((value)=>{

    return (value>25);
})
console.log(result8);


arr = [1,2,3,4,3,3,2,1,2];
let result9 = arr.filter((value)=>{
                            // return value != 3;
                            return value == 1;  // true? false
                        })
console.log(result9);                        


// 3) find
// return 이 true 인 요소를 찾는 기능. 못찾으면 undefined
arr = [1,2,3,4,3,3,2,1,2];
let result10 = arr.find((value)=>{
                            // return value != 3;
                            return value == 5;  // true? false
                        })
console.log(result10);       //find는 찾은 항목들을 배열로 보여주지 않고 항목한개만 보여준다.                 
// 항목들을 못찾을 경우 undefined

// 4) findIndex
// return이 true 인 요소의 인덱스를 찾는 기능. 못찾으면 -1

arr = [1,2,3,4,3,3,2,1,2];
let result11 = arr.findIndex((value)=>{
                            // return value != 3;
                            return value == 5;  // true? false
                        })
console.log(result11); 

if(result11==-1)
    console.log('못찾았다. 그런거없다.');