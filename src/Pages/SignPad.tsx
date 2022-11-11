import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

import "./SignPad.scss";

const SignPad: React.FC = () => {
  const [trimmedDataURL, setTrimmedDataURL] = useState<string>("");
  const [signPad, setSignPad] = useState<SignatureCanvas | null>(null);

  const handleClear = () => {
    console.log(signPad);
    if (signPad) {
      signPad.clear();
    }
  };

  const handleTrim = () => {
    if (signPad) {
      console.log(signPad.getTrimmedCanvas().toDataURL("image/png"));
      setTrimmedDataURL(signPad.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

  return (
    <div className="signPad">
      <div className="signContainer">
        <SignatureCanvas
          canvasProps={{ width: 500, height: 200 }}
          ref={(ref) => setSignPad(ref)}
        />
      </div>
      <button className="" onClick={handleClear}>
        Clear
      </button>
      <button className="" onClick={handleTrim}>
        Trim
      </button>
      {trimmedDataURL ? (
        <img
          className=""
          width={200}
          height={50}
          alt="trimmedDataURL"
          src={trimmedDataURL}
        />
      ) : null}
    </div>
  );
};

export default SignPad;
