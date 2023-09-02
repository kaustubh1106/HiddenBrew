import React from 'react'
import { Contract, ethers } from 'ethers';
import { useEffect } from 'react';
import '../styles/Buycoffee.css'
const Buycoffee = ({Contract}) => {
    const buyCoffee = async (event)=>{
        event.preventDefault();
        const name1 = document.getElementById('namefrom').value;
        const name2 = document.getElementById('nameto').value;
        const addto = document.getElementById('adddressto').value;
        const message = document.getElementById('message').value;
      
        const amount = {
            value: ethers.parseEther('0.01')
        }

        //console.log(Contract.contract)
        const transaction = await Contract.purchaseCoffee(name1,name2,addto,message,amount)
        await transaction.wait()

    }
    return (
        <div>
            <div className='div1'>
                <div className='div2'>
                    <div className="yash">
                    <form className='form1'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label form-text ">
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="namefrom"
                                aria-describedby="emailHelp"
                            />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label form-text ">
                                Buying for
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameto"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label form-text">
                                Address
                            </label>
                            <input
                                type="text"
                                placeholder='address of the reciever'
                                className="form-control"
                                id="adddressto"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label form-text">
                                Message
                            </label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary pay" onClick={buyCoffee}>
                            Pay
                        </button>
                    </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Buycoffee