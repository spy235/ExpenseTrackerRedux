import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransctionList from './components/TransctionList';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <>
    <GlobalProvider>


       <Header />
       <div class="container">
        <Balance />
        <IncomeExpense />
        <TransctionList />
        <AddTransaction />
       </div>
       </GlobalProvider>

    </>
   
  );
}

export default App;
