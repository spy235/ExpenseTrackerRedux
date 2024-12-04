import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

const Transaction = ({text,amoount,id}) => {
    const sign = amoount < 0 ? '-' : '+';
    const {deleteTranscation} =  useContext(GlobalContext);

    

  return (
    <li className={sign==='+'?'plus':'minus' }>
            {text} <span>{`${sign}$ ${amoount}`}</span><button onClick={()=>deleteTranscation(id)} className="delete-btn">x</button>
           </li>
  )
}

export default Transaction;
