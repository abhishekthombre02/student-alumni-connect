import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Join from './Components/Join';
import Chat from './Components/Chat';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Join/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
