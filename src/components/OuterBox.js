import React, { useState, useEffect } from 'react';
import './OuterBox.css';

const OuterBox = ({ location }) => {
  const [isInnerBoxesVisible, setIsInnerBoxesVisible] = useState([false, false]); // Adjusted for two inner boxes
  const [data, setData] = useState({
    activePower: 0,
    apparentPower: 0,
    frequency: 0,
    powerFactor: 0,
    voltageReadings: { r: 0, y: 0, b: 0 },
    currentReadings: { r: 0, y: 0, b: 0 }
  });

  const toggleInnerBoxes = () => {
    setIsInnerBoxesVisible((prev) =>
      prev.map((visible) => !visible) // Toggle visibility of inner boxes
    );
  };

  // Uncomment this when you're ready to fetch data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from your source (e.g., Firebase)
  //       const snapshot = await db.collection('dashboardData').doc('latestReadings').get();
  //       const data = snapshot.data();
  //       setData({
  //         activePower: data.activePower,
  //         apparentPower: data.apparentPower,
  //         frequency: data.frequency,
  //         powerFactor: data.powerFactor,
  //         voltageReadings: {
  //           r: data.voltageReadings.r,
  //           y: data.voltageReadings.y,
  //           b: data.voltageReadings.b
  //         },
  //         currentReadings: {
  //           r: data.currentReadings.r,
  //           y: data.currentReadings.y,
  //           b: data.currentReadings.b
  //         }
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="outer-box">
      <div className="outer-box-header">
        <span>Device Location:{location}</span>
        
        <button onClick={toggleInnerBoxes} className="add-box-btn">[]</button>
      </div>
      <div className="outer-box-content">
        <div className="outer-box-info">
          <div className="row">
            <div className="power-info">
              <div><strong>Active Power:</strong></div>
              <div>{data.activePower} kW</div>
            </div>
            <div className="power-info">
              <div><strong>Apparent Power:</strong></div>
              <div>{data.apparentPower} kVA</div>
            </div>
          </div>

          <div className="row">
            <div className="power-info">
              <div><strong>Frequency:</strong></div>
              <div>{data.frequency} Hz</div>
            </div>
            <div className="power-info">
              <div><strong>Power Factor:</strong></div>
              <div>{data.powerFactor}</div>
            </div>
          </div>
        </div>

        <div className="outer-box-parameters">
          <div className="parameter-title">Parameter Readings</div>
          <div className="voltage-current-readings">
            <div className="voltage-readings">
              <div><strong>Voltage Readings:</strong></div>
              <div className='hell'>
              <div>R-Y: </div>
              <div>{data.voltageReadings.r}V</div>
              </div>
              <div className='hell'>
              <div>Y-B:</div>
              <div>{data.voltageReadings.y}V</div>
              </div>
              <div className='hell'>
              <div>B-R: </div>
              <div> {data.voltageReadings.b}V</div>
              </div>
               
            </div>
            <div className="current-readings">
              <div><strong>Current Readings:</strong></div>
              <div className='hell'>
              <div>R: </div>
              <div>{data.voltageReadings.r}V</div>
              </div>
              <div className='hell'>
              <div>Y:</div>
              <div>{data.voltageReadings.y}V</div>
              </div>
              <div className='hell'>
              <div>B: </div>
              <div> {data.voltageReadings.b}V</div>
              </div>
            </div>
          </div>
        </div>
    
    {isInnerBoxesVisible[0] && <InnerBox location={`${location} Inner 1`} />}
    {isInnerBoxesVisible[1] && <InnerBox location={`${location} Inner 2`} />}
    </div>

     
</div>
  ); 
  
};

const InnerBox = () => {
  const [data, setData] = useState({
    activePower: 0,
    apparentPower: 0,
    frequency: 0,
    powerFactor: 0,
    voltageReadings: { r: 0, y: 0, b: 0 },
    currentReadings: { r: 0, y: 0, b: 0 }
  });

  // Uncomment this when you're ready to fetch data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from your source (e.g., Firebase)
  //       const snapshot = await db.collection('dashboardData').doc('latestReadings').get();
  //       const data = snapshot.data();
  //       setData({
  //         activePower: data.activePower,
  //         apparentPower: data.apparentPower,
  //         frequency: data.frequency,
  //         powerFactor: data.powerFactor,
  //         voltageReadings: {
  //           r: data.voltageReadings.r,
  //           y: data.voltageReadings.y,
  //           b: data.voltageReadings.b
  //         },
  //         currentReadings: {
  //           r: data.currentReadings.r,
  //           y: data.currentReadings.y,
  //           b: data.currentReadings.b
  //         }
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="inner-box">
      <div className="inner-box-header">
        <span>Device Location: A block</span>
      </div>
      <div className="inner-box-content">
        <div className="inner-box-info">
          <div className="row">
            <div className="power-info">
              <div><strong>Active Power:</strong></div>
              <div>{data.activePower} kW</div>
            </div>
            <div className="power-info">
              <div><strong>Apparent Power:</strong></div>
              <div>{data.apparentPower} kVA</div>
            </div>
          </div>

          <div className="row">
            <div className="power-info">
              <div><strong>Frequency:</strong></div>
              <div>{data.frequency} Hz</div>
            </div>
            <div className="power-info">
              <div><strong>Power Factor:</strong></div>
              <div>{data.powerFactor}</div>
            </div>
          </div>
        </div>
        <div className="inner-box-parameters">
          <div className="parameter-title">Parameter Readings</div>
          <div className="voltage-current-readings">
            <div className="voltage-readings">
              <div><strong>Voltage Readings:</strong></div>
              <div className='hell'>
              <div>R-Y: </div>
              <div>{data.voltageReadings.r}V</div>
              </div>
              <div className='hell'>
              <div>Y-B:</div>
              <div>{data.voltageReadings.y}V</div>
              </div>
              <div className='hell'>
              <div>B-R: </div>
              <div> {data.voltageReadings.b}V</div>
              </div>
             
            </div>
            <div className="current-readings">
              <div><strong>Current Readings:</strong></div>
              <div className='hell'>
              <div>R: </div>
              <div>{data.voltageReadings.r}V</div>
              </div>
              <div className='hell'>
              <div>Y:</div>
              <div>{data.voltageReadings.y}V</div>
              </div>
              <div className='hell'>
              <div>B: </div>
              <div> {data.voltageReadings.b}V</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterBox;
