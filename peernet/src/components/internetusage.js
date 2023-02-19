import React, { useState, useEffect } from 'react';
import { ReactInternetSpeedMeter } from "react-internet-meter";
export const InternetUsage=()=> {
  const [checkSpeed, SetCheckSpeed] = React.useState(
    "Finding internet speed."
  );
  return (
    <div>
      <h2 className="mb-3">React Find Internet Speed Example</h2>
      <ReactInternetSpeedMeter
        txtSubHeading="Internet connection is slow"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://i.postimg.cc/sft772VP/speedometer.png"
        downloadSize="1561257" //bytes
        callbackFunctionOnNetworkDown={(data) =>
          console.log(`Internet speed : ${data}`)
        }
        callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
      />
      <div className="card-body mt-4">
        <span className="display-1">{checkSpeed} MB/s</span>
      </div>
    </div>
  );
}

export default InternetUsage;
