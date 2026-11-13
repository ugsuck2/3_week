import {useState} from 'react'


function State01 (){
    

//   React Hooks (리액트 훅)
//   useState -> 상태를 저장하는 변수, 재 랜더링 발생 기준. 재랜더링 상황에서 값이 계속 유지
                            

//   리렌더링 발생시키는 기준
//   state 변수가 set함수를 통해서 값이 변경된 경우  -----> 화면 리랜더링(re-rendering)


//  const | let [변수명, set함수명] = useState(초기값);

let [count, setCount] = useState(0); // count = 0;

/*
function setCount(n){
    보유하고있는 count = n;
}
*/

    let cnt = 0; // 함수에 선언한 일반변수 , 재랜더링 시점에 다시 호출되면서 값이 0으로 또 초기화됨
                //값 유지 x
    let [num, setNum] = useState(0);           

    return (
        <div>
            <h1>State01</h1>
            <h2>일반 cnt 변수</h2>
            <p>{cnt}</p>

            <button onClick={()=>{
                console.log('cnt 증가 버튼 클릭');
                cnt++;
                console.log(cnt);
                num++ // state변수를 그냥증가
                console.log(num);
            }}>cnt증가</button>

            <br/><br/>
            <h2>count State 변수</h2>
            <p>{count}</p>

            <button onClick={()=>{
                console.log('count증가버튼클릭');
                //count++ ; 그냥 값 증가 -> 값증가는 되지만 재랜더링은안된다 set함수로 안해서
                //
                //setCount(count = count + 1); 사용이 어색하다
                setCount(count + 1)   //재랜더링 발생 조건 충족
                //보유하고 있는 count = 매개변수
                //보유하고 있는 count = count + 1
                setNum(num+1);       //이것도 재랜더링 발생 조건 충족 -> 인근에 있는 재랜더링요소를 모아서 한번에 수행
                console.log(count);
            }}>count증가</button>
        </div>
    )

}

export default State01;