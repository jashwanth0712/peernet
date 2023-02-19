import React, { useState } from 'react';
import { CreateFlow } from './createflow'
import { UpdateFlow } from "./updateflow";
import { DeleteFlow } from "./deleteflow";
import './vpnconnectcard.css'
export const VPNConnectCard = (props) => {
  const [showChild, setShowChild] = useState(false);

  function handleToggle() {
    setShowChild(!showChild);
  }

  return (
<div class="card">
  <div class="card2">
        <CreateFlow provider={props.provider} />
      </div>
    </div>

  );
}


export default VPNConnectCard;