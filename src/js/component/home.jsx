import React, { useState } from 'react';
import '../../styles/index.css';

const TrafficLight = () => {
  const [color, setColor] = useState('');
  const [extraColor, setExtraColor] = useState(false);

  const cycleColor = () => {
    if (color === 'red') {
      setColor('green');
    } else if (color === 'green') {
      setColor('yellow');
    } else if (color === 'yellow') {
      if (extraColor) {
        setColor('purple');
      } else {
        setColor('red');
      }
    } else {
      setColor('red');
    }
  };

  const addExtraColor = () => {
    setExtraColor(true);
  };

  return (
    <div className="traffic-light">
      <div className="border">
        <div
          className={`light red ${color === 'red' ? 'glow' : ''}`}
          onClick={() => setColor('red')}
        ></div>
        <div
          className={`light yellow ${color === 'yellow' ? 'glow' : ''}`}
          onClick={() => setColor('yellow')}
        ></div>
        <div
          className={`light green ${color === 'green' ? 'glow' : ''}`}
          onClick={() => setColor('green')}
        ></div>
        {extraColor && (
          <div
            className={`light purple ${color === 'purple' ? 'glow' : ''}`}
            onClick={() => setColor('purple')}
          ></div>
        )}
      </div>
      <button onClick={cycleColor}>Cycle Color</button>
      {!extraColor && <button onClick={addExtraColor}>Add Purple</button>}
    </div>
  );
};

export default TrafficLight;
