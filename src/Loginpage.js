import React, { useContext, useState } from 'react';
import './First.css'
import { Theme } from './App';

function Loginpage() {

    const {theme} = useContext(Theme) 
    const {settheme} = useContext(Theme)  

     
    const changeclass = 'bg-' + theme



  return (
	<div className={changeclass}  >
		<div className='Login-form'>

		<h2>Log in</h2>

		<form action="">
        <div>
          <label htmlFor="">Email</label><br />
			<input type="text" name="" id="" className='inp' /> 
		</div>
		<div>
          <label htmlFor="">Password</label><br />
			<input type="text" name="" id="" className='inp'/> 
		</div>
		<div>
			<input type="submit " className='loginbtn inp' name="" id="" value={'Login'}/> 
		</div>

		<div>
		<input type='checkbox' onClick={(e)=>{settheme((e.target.checked)? "dark" : "light")}}/>{theme}
		</div>
		</form>
         
		</div>
	</div>
  );
}

export default Loginpage;
