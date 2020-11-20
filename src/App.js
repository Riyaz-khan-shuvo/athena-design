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
  import Project from './Components/Project/Project';
import Achievement from './Components/Achievement/Achievement';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route>
                        <Header></Header>
                        <Banner></Banner>
                        <ChooseTeam></ChooseTeam>
            <Project></Project>
      <Achievement></Achievement>
                    </Route>
                    <Route>
                        
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
