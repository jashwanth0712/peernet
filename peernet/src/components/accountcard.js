import React, { useState, useEffect } from "react";
import './accountcard.css'
import goerli_img from '../images/goerli.png'
let account;

export const AccountCard = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const checkIfWalletIsConnected = async () => {
    console.log("runs");
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      // setupEventListener()
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const connectWallet = async () => {
    // Check if MetaMask is installed on user's browser
    if(window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const chainId = await window.ethereum.request({ method: 'eth_chainId'});
      window.ethereum.request({method:'eth_requestAccounts'})
          .then(res=>{
                  // Return the address of the wallet
                  console.log(res) 
          })
      // Check if user is connected to Mainnet
      if(chainId !== '0x5') {
        alert("Please connect to Mainnet");
      } else {
        let wallet = accounts[0];
        console.log(wallet)
        // setWalletAddress(wallet);
      }
    } else {
      alert("Please install Mask");
    }
  }
  return (
    <div class="accountcard accountcard-5">
<img classname="goerli" src={goerli_img} alt="connected" />
  <p class="accountcard__exit"></p>
  <div class="text">
  {(currentAccount.length===0)?`Not connected`:`${currentAccount.substring(0, 6)}.....${currentAccount.substring(
            36
          )}`}
  </div>
  <p class="accountcard__apply">
      <button className='button2'onClick=    {connectWallet}> {(currentAccount.length===0)?`Connect`:`Connected`}</button>
    <a class="accountcard__link" href="#"> <i class="fas fa-arrow-right"></i></a>
  </p>
</div>
  );
};

export default AccountCard;