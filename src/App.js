
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import HomeScreen  from "./Screens/HomeScreen.js"
import DetailScreen from "./Screens/DetailScreen.js"
import ConstructionScreen from './Screens/ConstructionScreen.js';
import Point from "./Screens/Point.js"
import NewPoint from './Screens/Newpoint.js';
import Construction from './Screens/Construction.js';
import NewConstruction from './Screens/Newconstruction.js';
import {useState} from "react";


function App() {
  const [kkn, setkkn] = useState(null);
  return (
   <>
     <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/detail/:id" element={<DetailScreen/>}  />
            <Route path="/point/:p_id" element={<Point />} />
            <Route path="/newpoint" element={<NewPoint />} />
            <Route path="/construction" element={<ConstructionScreen/>} />
            <Route path="/construction/:c_id" element={<Construction/>} />
            <Route path="/construction/newConstruction" element={<NewConstruction/>} />
          </Routes> 
        </Container>
      </main>
      </Router>
   </>
  );
}

export default App;
