import './App.css';
import {Users158529} from './Users158529';
import {UserByID158529} from './UserByID158529';
import { Link,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Welcome to My app</h1>
      <Link to="/Users158529"><button>View All Users</button></Link><br/><br/>
      <Link to="/UserByID158529"><button>ViewUser By Login</button></Link><br/><br/>
      <Routes>
      <Route path="/Users158529" element={<Users158529/>} />
      <Route path="/UserByID158529" element={<UserByID158529/>} />
      </Routes>
    </div>
  );
}

export default App;
