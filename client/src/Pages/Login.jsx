import React from 'react'
import "../Assets/Login.css"
import { useNavigate } from 'react-router';


export default function Login() {

  const history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        history('/home');
    }


  return (
    <div class='login-container'>
    <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked  /><label style={{marginLeft:"150px"}} for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
      
      <form class="login-form" method="post" onSubmit={handleSubmit}>
        <div class="sign-in-htm">
          <div class="group">
            <label for="user" class="label">Username</label>
            <input id="user" type="text" class="input" name="username" />
          </div>
          <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass" type="password" class="input" data-type="password" name="password" />
          </div>
          <div class="group">
            <input id="check" type="checkbox" class="check" checked/>
            <label for="check"><span class="icon"></span> Keep me Signed in</label>
          </div>
          <div class="group">
            <input type="submit" class="button" value="Sign In"/>
          </div>
          <div class="hr"></div>
          
        </div>
        
      </form>
     
    
    </div>
  </div>
  </div>
  )
}

