import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import CharacterWithRouter from "./Character";
import CharactersList from "./CharactersList";
import Header from "./Header";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={CharactersList}/>
                    <Route exact path="/characters/:id" component={CharacterWithRouter}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
