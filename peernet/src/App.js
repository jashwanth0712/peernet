import React, { useState } from 'react';
import './App.css'
import {CreateFlow} from './components/createflow'
import { UpdateFlow } from "./components/updateflow";
import { DeleteFlow } from "./components/deleteflow";
import { AccountCard } from "./components/accountcard";
export default function App(){
  
  return (
     <div>
      <CreateFlow/>
      <UpdateFlow/>
      <DeleteFlow />
      <AccountCard/>
     </div>
    );
};
