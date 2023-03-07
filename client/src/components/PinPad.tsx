// import '../styles/LoginPage.scss';
// import { useState } from 'react';

// function LoginPage() {
//   const [pin, setPin] = useState('');
//   const [error, setError] = useState(null);

//   const handleButtonClick = event => {
//     const num = event.target.value;
//     if (pin.length < 4) {
//       setPin(pin + num);
//     }
//   };

//   const handleKeyDown = e => {
//     if (/^\d$/.test(e.key) && pin.length < 4) {
//       setPin(pin + e.key);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:5005/employees');
//       const employees = await response.json();

//       const employee = employees.find(e => e.pin === parseInt(pin));
//       if (!employee) {
//         setError('Invalid PIN');
//         return;
//       }

//       // Log in the employee and redirect to the dashboard
//       console.log(employee.firstName);
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred while logging in');
//     }
//   };

//   return (
//     <div className='container'>
//       <h2>Enter your Employee ID</h2>
//       <input type='number' value={pin} onKeyDown={handleKeyDown} readOnly />
//       {error && <p className='error'>{error}</p>}
//       <div className='num-pad'>
//         <button onClick={handleButtonClick} value='1'>
//           1
//         </button>
//         <button onClick={handleButtonClick} value='2'>
//           2
//         </button>
//         <button onClick={() => handleButtonClick('2')}>2</button>
//         <button onClick={() => handleButtonClick('3')}>3</button>
//         <button onClick={() => handleButtonClick('4')}>4</button>
//         <button onClick={() => handleButtonClick('5')}>5</button>
//         <button onClick={() => handleButtonClick('6')}>6</button>
//         <button onClick={() => handleButtonClick('7')}>7</button>
//         <button onClick={() => handleButtonClick('8')}>8</button>
//         <button onClick={() => handleButtonClick('9')}>9</button>
//         <button onClick={() => setPin('')}>Clear</button>
//         <button onClick={() => handleButtonClick('0')}>0</button>
//         <button onClick={handleLogin}>Enter</button>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
