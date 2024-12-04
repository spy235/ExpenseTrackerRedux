import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import Transaction from './Transaction';

const TransctionList = () => {

  let {transactions} =  useContext(GlobalContext);

  

  return (
   <>
    <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transcation)=>
            (<Transaction id={transcation.id}  key={transcation.id} text={transcation.text} amoount={transcation.amoount} />)
        )}
        
      </ul>
   </>
  )
}

export default TransctionList
