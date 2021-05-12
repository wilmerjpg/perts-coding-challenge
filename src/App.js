import React, { useState } from 'react';
import Toogle from './components/Toggle';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Function to change toggle value
   * @param value
   */
  const handleChange = value => {
    setIsChecked(value);
  };

  return (
    <div className="App">
      <Toogle isChecked={isChecked} handleChange={handleChange} />
    </div>
  );
};

export default App;
