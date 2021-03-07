import React from 'react';
import Square from '../Square/Square'
import "./Board.css";


const Board = ({squares, onClicks})=>(           //squares and onclicks should be arrays of i elements
    <div className={"board"}>
        {squares.map((square, i)=>(
                <Square key={i} sign={square} onClickManager={()=>onClicks(i)} />
        ))}
    </div>
);

export default Board;