import React from 'react';
import { ReactDOM } from 'react';

export default  function Login(){

    const [user,setUser] = React.useState({
        username:'',
        password:'',
        confirmPassword:'',
        joinedNewLetter:true
    })

    function handleOnchange(event){
        const {name,value,type,checked} = event.target;
        setUser((previouse)=>{
            return{
                ...previouse,
                [name]:type === 'checkbox'?checked:value
            }
        });

        console.log(user);

    }

    function handleSubmit(event){
            event.preventDefault();
            if(user.password === user.confirmPassword){
                console.log('login success fully');
            }else{
                console.log('your password is worng or incorrect please renter your password');
            }
    }
    return(
        <dvi>
            <form onSubmit={handleSubmit}>
               <label>Enter your username</label>
                <input 
                type="text"
                 onChange={handleOnchange}
                 name="username"
                 value={user.username}
                 placeholder='Enter your username'>
                </input> 

                <label>Enter your Password</label>
                <input 
                type="text" 
                 onChange={handleOnchange}
                 name="password"
                 value={user.password}
                placeholder='Enter your password'>
                </input> 

                <label>Please reenter your password</label>
                <input 
                type="text" 
                 onChange={handleOnchange}
                 name="confirmPassword"
                 value={user.confirmPassword}
                placeholder='please re-enter your password'>
                </input> 

                <input 
                id="newLetter"
                type="checkbox" 
                checked={user.joinedNewLetter}
                onChange={handleOnchange}
                name="joinedNewLetter"
                placeholder='please re-enter your password'>
                </input> 
                <label htmlFor='newLetter'>are you want to join new letter</label>
                <button >Login</button>
            </form>
        </dvi>
    );
}