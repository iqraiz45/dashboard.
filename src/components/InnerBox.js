import React from 'react';
import './innerBox.css';


const InnerBox = ({ data }) => {
  return (
    <div className="inner-box">
      <div className="box-header">
        <h4>Active Power</h4>
      </div>
      <div className="box-data">
        <div>{data.activePower}</div>
        <div>{data.apparentPower}</div>
      </div>

      <div className="box-header">
        <h4>Frequency</h4>
      </div>
      <div className="box-data">
        <div>{data.frequency}</div>
        <div>{data.powerFactor}</div>
      </div>

      <div className="box-header">
        <h4>Voltage Readings</h4>
      </div>
      <div className="box-data">
        <div className="colored-line"></div>
        <div>{data.voltage}</div>
      </div>

      <div className="box-header">
        <h4>Current Readings</h4>
      </div>
      <div className="box-data">
        <div>{data.current}</div>
      </div>

      <div className="box-header">
        <h4>Parameter Readings</h4>
      </div>
      <div className="box-data">
        <div>R-Y</div>
        <div>Y-B</div>
        <div>B-R</div>
      </div>
    </div>
  );
};

export default InnerBox;
