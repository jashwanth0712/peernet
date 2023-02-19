import React, { useState } from 'react';
import {CreateFlow} from './createflow'
import { UpdateFlow } from "./updateflow";
import { DeleteFlow } from "./deleteflow";
export const VPNConnectCard = (props)=> {
  const [showChild, setShowChild] = useState(false);

  function handleToggle() {
    setShowChild(!showChild);
  }

  return (
    <div>
     
     <CreateFlow provider={props.provider}/>
      {/* <button onClick={handleToggle}> </button> */}
      {/* {showChild &&   <UpdateFlow provider={props.provider}/>}  */}
      {/* <DeleteFlow provider={props.provider}/> */}
      
    </div>
  );
}

function ChildComponent() {
  return (
    <div>
      <h2>I am a child component!</h2>
      <p>And I appear when the toggle button is clicked.</p>
    </div>
  );
}
export default VPNConnectCard;