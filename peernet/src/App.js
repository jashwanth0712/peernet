import React, { useState } from 'react';
import './App.css'
import { Auth, useAuth } from "@arcana/auth-react";
import { AccountCard } from "./components/accountcard";
import { InternetUsage } from "./components/internetusage";
import {VPNConnectCard} from './components/vpnconnectcard';
import DarkTable from "./components/darktable";

const data = [
  { id: 1, clientId: "0x08b3a44b5FecD0aC8C9Bb4CD8AC3857b432bc4ed", providerId: "0xFdf17e4dE5a86bD3eD58b22fC167Bc75FD1C5722", flowRate: "100 " },
  { id: 2, clientId: "0x08b3a44b5FecD0adasfgatCD8AC3857b432bc4ed", providerId: "0xFdf17e4dE5a86bD3eD58b22fC167Bc75Ffdskfsd", flowRate: "50 " },
  { id: 3, clientId: "0x08b3a44b5FecD0aC8C9Bb4CD8AC3857b432fresa", providerId: "0xFdf17e4dE5a86safgd6dfa65f46f84g5FD1C5722", flowRate: "75 " },
  { id: 4, clientId: "0x08adsfsfd651569sfad85691fad9857b432bc4ed", providerId: "0xFdf17e4dE5a86bfdsagar543a5sd3575FD1C5722", flowRate: "120 " },
];

const onLogin = () => {
  // Route to authenticated page
}
export default function App(){
  const auth = useAuth();
  const [provider, UpdateProvider] = useState('0xFdf17e4dE5a86bD3eD58b22fC167Bc75FD1C5722');
  return (
    <div>
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
     <DarkTable data={data} className="table"/>

    </div>
    
    );
};
