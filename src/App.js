import HomePage from "./clientHome/HomePage";
import Navbar from "./uiComponents/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LookUpPage from "./clientHome/LookUpPage";
import SelectSeat from "./Vehicle/SelectSeat";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/lookup" exact component={LookUpPage}/>
                <Route path="/company/matatu" exact component={SelectSeat}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
