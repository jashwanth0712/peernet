import React, { useState } from 'react';
import './App.css'
import { Auth, useAuth } from "@arcana/auth-react";
import { AccountCard } from "./components/accountcard";
import { InternetUsage } from "./components/internetusage";
import {VPNConnectCard} from './components/vpnconnectcard';
const onLogin = () => {
  // Route to authenticated page
}
export default function App(){
  const auth = useAuth();
  const [provider, UpdateProvider] = useState('0xFdf17e4dE5a86bD3eD58b22fC167Bc75FD1C5722');
  return (
     <div className='Complete'>
      {/* <networkCapture/> */}
      <VPNConnectCard provider={provider}/>
      <div className='Column'>
      <div>
      {auth.loading 
      ? ("Loading") 
      : auth.isLoggedIn ? (
        <AccountCard/>

      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
        </div>
      )}
    </div>
      </div>

     {/* <InternetUsage/>  */}
     </div>
    );
};
