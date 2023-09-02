import { Contract, ethers } from 'ethers';
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import instance from './CoffeePurchase.json';
import Home from './components/Home';
import Logs from './components/Logs.jsx';
import Messages from './components/Messages.jsx';
import Aboutus from './components/Aboutus.jsx';
import Buycoffee from './components/Buycoffee.jsx';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const contractAddress = "0x6f96Ec2eF71c58B7B0dA2389202732b85Ff47ABB";
  const contractABI = instance.abi;
  // async function contractReload(){
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //         const signer = await provider.getSigner();
  //         const contract = new Contract(contractAddress, contractABI, signer)
  //         setState({ provider, signer, contract });
  //         await state.contract;
  // }

  useEffect(() => {
    
    const connectWallet = async () => {
      try {
        if (window.ethereum == null) {
          alert("install metamask");
        }
        else {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new Contract(contractAddress, contractABI, signer)
          setState({ provider, signer, contract });
          await state.contract;
        }
      } catch (error) {
        console.log(error);
      }
      console.log(state.contract)
    }

    connectWallet();
  }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home Contract={state.contract}/>}/>
          <Route path='/Buycoffee' element={<Buycoffee Contract={state.contract}/>}/>
          <Route path='/Logs' element={<Logs Contract={state.contract}/>}/>
          <Route path='/Message' element={<Messages Contract = {state.contract}/>}/>   
          <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
 // reload = {contractReload}