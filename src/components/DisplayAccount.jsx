import { useSelector } from "react-redux"
import Deposit from "./Deposit"
import Withdraw from "./Withdraw"

const DisplayAccount = () => {

    const balance = useSelector((state) => state.account.balance)
    
  return (
    <div style={{padding:'40px'}}>
        <h1>Tabungan</h1>
        <h2>Saldo: {balance}</h2>
        <Deposit />
        <Withdraw />
        
    </div>
  )
}

export default DisplayAccount