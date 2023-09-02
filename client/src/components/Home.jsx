import React from 'react'
import '../styles/Home.css'
import img1 from '../assets/HiddenBrew-logo.png'





const Home = ({Contract}) => {
  const withdraw = async()=>{
    try{
    await Contract.withdrawFunds()
    }catch(error){ 
      alert("only owner can access this function")
    }
  }
  return (
    <div className='div1'>
      <div className='div2'>
        <img src={img1} className='img1' />
        <h1 className='heading1'>SIP THE BREW,<br />
          SHARE THE CLUE!
        </h1>
        <p className="line">Unlock Hidden Messages<br/>
          with Every Coffee Cup!</p>
        <btn type='submit' className='wfbtn' onClick={withdraw}> withdraw money! </btn>
      </div>
    </div>
  )
}

export default Home