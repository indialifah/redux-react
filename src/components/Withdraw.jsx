import { useDispatch } from "react-redux"
import { withdraw } from "../redux/slices/accountSlice"

const Withdraw = () => {
    const dispatch = useDispatch()

    const handleWithdraw = (event) => {
        event.preventDefault()
        const amount = event.target.withdraw.value
        dispatch(withdraw(parseInt(amount)))
        event.target.reset()
    }

  return (
    <div>
        <h4>Withdraw</h4>
        <form onSubmit={handleWithdraw} style={{display:'flex', gap:'10px'}}>
            <input type="number" name="withdraw"
            style={{padding:'10px', backgroundColor:'#d3d3d3', color: 'black', borderRadius:'10px'}}/>
            <button type="submit" style={{backgroundColor:'#483D8B'}}>Withdraw</button>
        </form>
    </div>
  )
}

export default Withdraw