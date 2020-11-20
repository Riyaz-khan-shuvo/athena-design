import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./App.css";
import Banner from './Components/Banner/Banner';
import ChooseTeam from "./Components/ChooseTeam/ChooseTeam";
import Footer from "./Components/Footer/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route>
                        <Header></Header>
                        <Banner></Banner>
                        <ChooseTeam></ChooseTeam>
                    </Route>
                    <Route>
                        
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
