import './App.css';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Navbar4 from './components/Navbar4';
import OnlineStoreTab from './components/OnlineStoreTab';
import OnlineStore from './components/OnlineStore';
import Deal from './components/Deal';
import Ourbrand from './components/Ourbrand';


function App() {
  return (
    <div className="App">
    <Navbar1 />
    <Navbar2 />
    <Navbar3 />
    <Navbar4 />
    <OnlineStoreTab />
    <OnlineStore />
    <Deal />
    <Ourbrand />


    </div>
  );
}

export default App;
