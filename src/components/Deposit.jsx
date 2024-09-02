import { useDispatch } from "react-redux"
import { deposit } from "../redux/slices/accountSlice"

const Deposit = () => {
    const dispatch = useDispatch()
    // const handleDeposit = () => {
    //     dispatch(deposit(10000))
    // }
    const handleDeposit = (event) => {
        event.preventDefault()
        const amount = event.target.deposit.value
        dispatch(deposit(parseInt(amount)))
        event.target.reset()
    }

  return (
    <div>
        <h4>Deposit</h4>
        <form onSubmit={handleDeposit} style={{display:'flex', gap:'10px'}} >
            <input type="number" name="deposit"
            style={{padding:'10px', backgroundColor:'#d3d3d3', color: 'black', borderRadius:'10px'}}/>
            <button type="submit" style={{backgroundColor:'#483D8B'}}>Deposit</button>
        </form>
        {/* <button onClick={handleDeposit}>Deposit 10.000</button> */}
    </div>
  )
}

export default Deposit