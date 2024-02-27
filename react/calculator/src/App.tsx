import './App.css';

function App() {
  let numArray: string[] = [''];
  let operatorArray: string[] = [];

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (event.target as HTMLButtonElement).innerText;

    if (parseInt(buttonValue) > -1 && parseInt(buttonValue) < 10) {
      numArray[numArray.length - 1] = numArray[numArray.length - 1] + buttonValue;
      let text = document.querySelector('p')
      text!.textContent = '';
      for (let i = 0; i < numArray.length; i++) {
        text!.textContent += numArray[i];
        text!.textContent += operatorArray[i] || '';
      }
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      numArray.push('');
      operatorArray.push(buttonValue);
      let text = document.querySelector('p')
      text!.textContent = '';
      for (let i = 0; i < numArray.length; i++) {
        text!.textContent += numArray[i];
        text!.textContent += operatorArray[i] || '';
      }
    } else if (buttonValue === '=') {
      let result = parseInt(numArray[0]);
      for (let i = 0; i < operatorArray.length; i++) {
        if (operatorArray[i] === '+') {
          result += parseInt(numArray[i + 1]);
        } else if (operatorArray[i] === '-') {
          result -= parseInt(numArray[i + 1]);
        } else if (operatorArray[i] === '*') {
          result *= parseInt(numArray[i + 1]);
        } else if (operatorArray[i] === '/') {
          result /= parseInt(numArray[i + 1]);
        }
      }
      let text = document.querySelector('p')
      text!.textContent = result.toString();
      numArray = [''];
      operatorArray = [];
    }  
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1>Kalkulator</h1>
      <p className='mb-4 border-2 border-slate-400 rounded-md w-1/4 h-7'></p>
      <div className='grid grid-cols-3 gap-4'>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>1</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>2</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>3</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>4</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>5</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>6</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>7</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>8</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>9</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>0</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>+</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>-</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>*</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>/</button>
        <button onClick={handleButtonClick} className='bg-slate-400 rounded-md px-4'>=</button>
      </div>
    </div>
  );
}

export default App;
