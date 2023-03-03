import '../styles/LoginPage.scss';
import { useState } from 'react';

function LoginPage() {
  const [pin, setPin] = useState('');

  const handleButtonClick = event => {
    const num = event.target.value;
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handleKeyDown = e => {
    if (/^\d$/.test(e.key) && pin.length < 4) {
      setPin(pin + e.key);
    }
  };

  return (
    <div className='container'>
      <h2>Enter your Employee ID</h2>
      <input type='number' value={pin} onKeyDown={handleKeyDown} readOnly />
      <div className='num-pad'>
        <button onClick={handleButtonClick} value='1'>
          1
        </button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => setPin('')}>Clear</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => console.log(`Entered pin: ${pin}`)}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
