import DisplayAccount from './components/displayAccount'
import './App.css'
import { toggleDarkMode } from "./redux/slices/accountSlice"
import { useSelector, useDispatch } from 'react-redux'

function App() {
  
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state) => state.account.isDarkMode)

    const handletoggleDarkMode = () => {
        dispatch(toggleDarkMode())
    }

  
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}
    style={{borderRadius:'2rem', paddingBottom:'40px'}}>
      <DisplayAccount />
      <button onClick={handletoggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default App
