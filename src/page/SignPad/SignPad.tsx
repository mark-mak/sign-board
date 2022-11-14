import React, { ChangeEventHandler, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

import "./SignPad.scss";

const SignPad: React.FC = () => {
  const [trimmedDataURL, setTrimmedDataURL] = useState<string>("");
  const [signPad, setSignPad] = useState<SignatureCanvas | null>(null);
  const [penColor, setPenColor] = useState("black");

  const handleClear = () => {
    console.log(signPad);
    if (signPad) {
      signPad.clear();
    }
  };

  const handlePenColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPenColor(e.target.value);
  };

  const handleTrim = () => {
    if (signPad) {
      console.log(signPad.getTrimmedCanvas().toDataURL("image/png"));
      setTrimmedDataURL(signPad.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

  return (
    <div className="SignPad">
      <div className="signContainer">
        <SignatureCanvas
          penColor={penColor}
          canvasProps={{ width: 500, height: 200 }}
          ref={(ref) => setSignPad(ref)}
        />
      </div>
      <div>
        <h4>Select Pen Color:</h4>
        <div>
          <input
            type="radio"
            id="penColorBlack"
            name="penColor"
            value="black"
            onChange={handlePenColorChange}
            defaultChecked
          />
          <label htmlFor="penColorBlack">black</label>
        </div>
        <div>
          <input
            type="radio"
            id="penColorRed"
            name="penColor"
            value="darkRed"
            onChange={handlePenColorChange}
          />
          <label htmlFor="penColorRed">red</label>
        </div>
        <div>
          <input
            type="radio"
            id="penColorBlue"
            name="penColor"
            value="darkBlue"
            onChange={handlePenColorChange}
          />
          <label htmlFor="penColorBlue">blue</label>
        </div>
        <div>
          <input
            type="radio"
            id="penColorGreen"
            name="penColor"
            value="darkGreen"
            onChange={handlePenColorChange}
          />
          <label htmlFor="penColorGreen">green</label>
        </div>
      </div>
      <button className="actionButton" onClick={handleClear}>
        Clear
      </button>
      <button className="actionButton" onClick={handleTrim}>
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
