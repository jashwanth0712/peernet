import React, { useState } from 'react';
import { CreateFlow } from './createflow'
import { UpdateFlow } from "./updateflow";
import { DeleteFlow } from "./deleteflow";
import connected_img from '../images/peernet.png'
import disconnected_img from '../images/disconnected.png'
import './vpnconnectcard.css'
export const VPNConnectCard = (props) => {
  const [showChild, setShowChild] = useState(false);

  function handleToggle() {
    setShowChild(!showChild);
  }

  return (
<div class="card">
  <div class="card2">
        <img src={connected_img} alt="connected" />
        <CreateFlow provider={props.provider} />
      </div>
    </div>

  );
}


export default VPNConnectCard;