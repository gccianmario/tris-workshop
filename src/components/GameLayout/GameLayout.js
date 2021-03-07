import Board from '../../components/Board/Board'
import React, { useState } from 'react';
import "./GameLayout.css"

const GameLayout = () => {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [XisNext, setXisNext] = useState(true);

  const clickManager = i => {
    //gestione click dell'i-esimo elemento del vettore history che contiene lo stato della partita
    let tmp = [...history];
    if(tmp[i] != null) return ;
    tmp[i] = XisNext ? "X" : "O";
    setXisNext(!XisNext);
    setHistory(tmp);
  }

  const checkWinner = () =>{
    for(let x = 0; x < 3; x++){
      //controllo le righe
      let chr = history[3*x]; //centro l'inizio riga pos 0 3 6
      let count = 1;
      for(let y = 1; y<3; y++){   //finisco di scorrerla inizio+1 inizio+2
        if(history[3*x + y] === chr)
          count++;
      }
      //se trovo 3 match non null la parita finisce
      if(count === 3 && chr != null)
        return chr;
    }

    for(let x = 0; x < 3; x++){
      //controllo colonne come sopra
      let chr = history[x];
      let count = 1;
      for(let y = 1; y<3; y++){
        if(history[x + 3*y] === chr)
          count++;
      }
      if(count === 3 && chr != null)
        return chr;
    }

    //controllo diagonali imponendo le posizioni
    let diag1 = [ 0, 4, 8];
    let diag2 = [ 2, 4, 6];


    if(history[0] === history[4] &&  history[4] === history[8] && (history[4] != null))
      return history[4];

    if(history[2] === history[4] &&  history[4] === history[6]  && (history[4] != null))
      return history[4];

    let count = 0;

    //verifico che le partita non sia terminata in pareggio
    history.forEach((x) => {
      if(x != null) count++;
    })
    if(count === 9)
      return "D"

    return "F"
  }

  const status = checkWinner();
  if (status !== "F") {
    if(status === "D"){
      return (
          <div className="page-layout">
            <h1>Pareggio</h1>
            <a href="http://localhost:3000/">Gioca Ancora</a>
          </div>
      );
    }
    return (
        <div className="page-layout">
          <h1>{status} è il vincitore!</h1>
          <a href="http://localhost:3000/">Gioca Ancora</a>
        </div>
    );
  }

  return (
      <div className="page-layout">
        <Board squares={history} onClicks={clickManager}/>
      </div>
  );
}

export default GameLayout;
