import './Gs.css'
import { useState } from 'react'


function Gs(){


  let [count, setCount] = useState(0);

  let cnt = 0;

    return(
      <div className="center">
        <h1>리엑트 복습시작</h1>
        <h3>유광석</h3>
        <div>
        <button onClick={()=>{
          console.log('버튼클릭됨');
          setCount(count+1);
          console.log(count);


        }}>{count}</button>
        </div>
      </div>

    )
}
export default Gs