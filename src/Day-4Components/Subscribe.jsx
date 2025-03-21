import React from 'react';


const Subscribe = () => {
  return (
    <div id='container'>
        <form>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates</p>
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="email" placeholder='Email'/>
        <div>
        <button type='submit'>Subscribe</button>

        </div>
       
    </form>
    </div>
    
  )
}

export default Subscribe