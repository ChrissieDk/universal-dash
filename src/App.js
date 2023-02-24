import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Billing from './Billing';
import TerminationRequest from './terminationRequest';
import SimSwop from './simSwop';
import Login from './Login';
import Register from './Register';
import UserIdClick from './UserIdClick';

const App = () => {
 

  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-white object-cover flex items-center border-b-4">
       <Sidebar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Billing" element={<Billing />} />
          <Route exact path="/TerminationRequest" element={<TerminationRequest />} />
          <Route exact path="/SimSwop" element={<SimSwop />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/UserIdClick" element={<UserIdClick />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;