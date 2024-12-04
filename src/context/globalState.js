import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

const intialState = {
    transactions:[
        {id:1,text:'Flower',amoount:-20},
        {id:2,text:'Salary',amoount:300},
        {id:3,text:'Book',amoount:-10},
        {id:4,text:'Camera',amoount:150}
    ]
}

//create Context
export const GlobalContext = createContext(intialState);

//provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,intialState);

//Actions
function deleteTranscation(id){
    dispatch({
        type:'DELETE_TRANSCATION',
        payload:id
    })
}
function addTranscation(incomeAndExpense){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:incomeAndExpense
    })
}


return (
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTranscation,
        addTranscation
    }}>
        {children}
    </GlobalContext.Provider>
)
}