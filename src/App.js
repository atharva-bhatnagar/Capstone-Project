
import './App.css';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Customers from './components/main/Customers';
import Dashboard from './components/main/Dashboard';
import Main from './components/main/Main';
import Navbar from './components/main/Navbar';
import Transactions from './components/main/Transactions';

function App() {
  return (
    <div className="App">
      
      <Customers/>
      <Navbar/>
      <Dashboard/>
      <Login/>
      <Main/>
      <Transactions/>
      <Register/>
    </div>
  );
}

export default App;
