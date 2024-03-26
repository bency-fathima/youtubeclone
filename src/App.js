import './App.css';
import Header from './Header/Header';
import Homepage from './Homepage';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Searchpage from './components/Searchpage';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
        
          <Route path='/search/:searchterm' component={Searchpage} />
          <Route path='/' component={Homepage} />
          </Routes>
          <Homepage/>
          <Searchpage/>
      </Router>
    </div>
  );
}

export default App;
