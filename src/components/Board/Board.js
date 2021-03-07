import React from 'react';
import Square from '../Square/Square'
import "./Board.css";


const Board = ({squares, onClicks})=>(           //squares and onclicks should be arrays of i elements
    <>
        <h1>X vs. O Chi vincerà?</h1>
        <div className={"board"}>
            {squares.map((square, i)=>(
                <Square key={i} sign={square} onClickManager={()=>onClicks(i)} />
            ))}
        </div>
    </>
);

export default Board;