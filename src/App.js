import { useState } from 'react';
import './App.css';
import Grid from './Grid';

function App() {

  const [initialValue, setInitialValue] = useState(0);
  const [grid, setGrid] = useState();
  const [showGrid, setShowGrid] = useState(false);
  const [noOfSafeCells, setNoOfSafeCells] = useState(23);
  const [noOfUncoveredCells, setNoOfUncoveredCells] = useState(25);
  const [currentWinning, setCurrentWinning] = useState(0);
  // const [matchOver, setMatchOver] = useState(false);
  const [winningProbability, setWinningProbability] = useState(1);

  const [valueToDisplay, setValueToDisplay] = useState([['Click','Click','Click','Click','Click'],['Click','Click','Click','Click','Click'],
  ['Click','Click','Click','Click','Click'],['Click','Click','Click','Click','Click'],['Click','Click','Click','Click','Click']]);

  const startGame = () => {
    if(initialValue === 0){
      alert('Please specify a correct initial amount.');
      return;
    }

    const g = new Grid(5, 2, Number(initialValue));
    console.log(g);

    setGrid(g);
    setShowGrid(true);
    setCurrentWinning(initialValue);

  }

  const uncoverCell = (row, col) => {

    const val = grid.board[row][col];
    const displayTable = valueToDisplay;

    if(val===1){
      displayTable[row][col]='Bomb ';
      setValueToDisplay(displayTable);
      gameLost();
    }
    else if(val===2){
      alert('Cell already clicked');
    }
    else{
      displayTable[row][col]='Safe ';
      setValueToDisplay(displayTable);
      calculateExpectedWinning(row, col);
    }

  }

  const calculateExpectedWinning = (row, col) => {
    const newWinningProbability = winningProbability * (noOfSafeCells/noOfUncoveredCells);
    setNoOfSafeCells(noOfSafeCells-1);
    setNoOfUncoveredCells(noOfUncoveredCells-1);
    setWinningProbability(newWinningProbability);
    const newWinningAmount = 0.97/newWinningProbability;
    setCurrentWinning(Math.round(newWinningAmount*100)/100);
    grid.board[row][col]=2;
  }

  const gameLost = () => {
    alert('You lost the game');
    window.location.reload();
  }

  const endGame = () => {
    alert('You won $'+ currentWinning);
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        {!showGrid ? 
        (<><div>
          Enter the amount you want to play with<br/>
          <input value={initialValue} onChange={(e)=>setInitialValue(e.target.value)}></input>
        </div>
        <button onClick={startGame}>Start</button></>):
        (<div>
          <div>Current Winning: {currentWinning}</div>
          <div style={{margin:'3%'}}>
            <div style={{display: "flex"}}>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(0,0)}>{valueToDisplay[0][0]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(0,1)}>{valueToDisplay[0][1]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(0,2)}>{valueToDisplay[0][2]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(0,3)}>{valueToDisplay[0][3]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(0,4)}>{valueToDisplay[0][4]}</div>
            </div>
            <div style={{display: "flex"}}>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(1,0)}>{valueToDisplay[1][0]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(1,1)}>{valueToDisplay[1][1]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(1,2)}>{valueToDisplay[1][2]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(1,3)}>{valueToDisplay[1][3]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(1,4)}>{valueToDisplay[1][4]}</div>
            </div>
            <div style={{display: "flex"}}>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(2,0)}>{valueToDisplay[2][0]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(2,1)}>{valueToDisplay[2][1]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(2,2)}>{valueToDisplay[2][2]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(2,3)}>{valueToDisplay[2][3]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(2,4)}>{valueToDisplay[2][4]}</div>
            </div>
            <div style={{display: "flex" }}>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(3,0)}>{valueToDisplay[3][0]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(3,1)}>{valueToDisplay[3][1]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(3,2)}>{valueToDisplay[3][2]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(3,3)}>{valueToDisplay[3][3]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(3,4)}>{valueToDisplay[3][4]}</div>
            </div>
            <div style={{display: "flex"}}>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(4,0)}>{valueToDisplay[4][0]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(4,1)}>{valueToDisplay[4][1]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(4,2)}>{valueToDisplay[4][2]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(4,3)}>{valueToDisplay[4][3]}</div>
              <div style={{border: "1px solid black", padding: '1%'}} onClick={()=>uncoverCell(4,4)}>{valueToDisplay[4][4]}</div>
            </div>
          </div>
          <button onClick={endGame}>End Game</button>
        </div>)}
        
      </header>
    </div>
  );
}

export default App;
