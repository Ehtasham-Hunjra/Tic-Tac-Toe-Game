import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/board';
import Winner from './components/winner';
function App() {
  const [isNext, setIsNext] = useState(true);
  const [value, setValue] = useState(Array(9).fill(null));
  function handleClick(i) {
      const nextSquare = value.slice();
      if(nextSquare[i] || calculateWinner(value)) {
          return
      }
      nextSquare[i] = isNext ? 'X' : 'O';
      setValue(nextSquare);
      setIsNext(!isNext);
  }

  function calculateWinner(value) {
      let winningLines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
          ];
          for(let i = 0; i < winningLines.length; i++) {
              const [a, b, c] = winningLines[i];
              if(value[a] && value[a] === value[b] && value[a] === value[c])
                  {
                      return value[a];
                  }
          }
          return null;

  }
  
return(
  <>
    <Winner winner={calculateWinner(value)} nextMove={isNext}/>
    <Board onSquareClick={handleClick} value={value}/>
  </>
)
}

export default App
