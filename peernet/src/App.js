import React, { useState } from 'react';
import './App.css'

import { AccountCard } from "./components/accountcard";
import { InternetUsage } from "./components/internetusage";
import {VPNConnectCard} from './components/vpnconnectcard';
export default function App(){
  const [provider, UpdateProvider] = useState('0xFdf17e4dE5a86bD3eD58b22fC167Bc75FD1C5722');
  return (
     <div className='Complete'>
      <VPNConnectCard provider={provider}/>
      <AccountCard/>
      {/* <InternetUsage/> */}
     </div>
    );
};
