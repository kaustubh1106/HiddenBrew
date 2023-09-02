import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/message.css'
const Messages = ({Contract}) => {

    window.ethereum.on('accountsChanged',()=>{
        console.log("accound changed");
        window.location.reload()
    })
    const [message,setMessage] = useState();
    
    const showMessage = async (event)=>{
        //await reload();
        //event.preventDefault()
        const messages= await Contract.getMessage();
        //await messages.wait()
        setMessage(messages);
        if(!messages){
        alert("you are not the right person");
        }
        else{
            alert(messages)
        }
    }

    return (
        <div>
            <div className='div1'>
                <div className='div2 div2sm'>
                    <btn type='submit' className='smbtn' onClick={showMessage}> show message </btn>
                </div>
            </div>
        </div>
    )
}

export default Messages