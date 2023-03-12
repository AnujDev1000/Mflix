import Layout from './components/Layout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={2000} theme="colored" hideProgressBar={true} />
      <Layout />
    </div>
  )
}

export default App
