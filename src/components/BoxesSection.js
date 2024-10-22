import React from 'react';
import './BoxesSection.css';
import OuterBox from './OuterBox';

const BoxesSection = () => {
  return (
    <div className="boxes-section">
      {/* First row of outer boxes */}
      <div className="box-row">
        <OuterBox location="A1 block" />
        <OuterBox location="A2 block" />
        <OuterBox location="A3 block" />
      </div>

      {/* Second row of outer boxes */}
      <div className="box-row">
        <OuterBox location="B block" />
        <OuterBox location="LT block" />
        <OuterBox location="Boys Hostel" />
      </div>
    </div>
  );
};

export default BoxesSection;
