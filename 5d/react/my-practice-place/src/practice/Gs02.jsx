import './Gs02.css'
import { useState } from 'react'

function Gs02() {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');



  return (
    <div>
      <form action="/assess02.html">
        <div className="mainBox">
            <div className="top_message">
                <p>Welcome Back!</p>
            </div>
            <div className="email">   {/*jsx에서는 html과 js와 달리 닫는태그가 필요없는 태그도 닫아줘야한다 */}
                <input type="email" placeholder="Email Address *" value={email} onChange={(e)=>(
                  setEmail(e.target.value)
                )}/>  {/*여기! */}
            </div>
            <div className="password">
                <input type="password" placeholder="Password *" value={password} onChange={(p)=>{
                  setPassword(p.target.value)
                }}/>
            </div>
            <div className="loginButton"><button type="submit">LOG IN</button></div>
        </div>
      </form>
    </div>
  )
}

export default Gs02;