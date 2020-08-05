import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, showLoader} from "../actions/actions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import CharacterWithRouter from "./Character";
import CharactersList from "./CharactersList";
import Header from "./Header";

const App = () => {
    const dispatch = useDispatch();
    const maxPage = useSelector(state => state.data.maxPage);
    const [firstPage] = useState(1);
    const [pageCount, setPageCount] = useState(2);
    const characters = useSelector(state => state.data.fetchedData);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.scrollingElement.scrollHeight && pageCount <= maxPage) {
            dispatch(fetchData(pageCount));
            window.removeEventListener('scroll', handleScroll);
            setPageCount(pageCount + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [characters])

    useEffect(() => {
        dispatch(showLoader());
        setTimeout(() => {
            dispatch(fetchData(firstPage));
        }, 300);
    }, [dispatch, firstPage]);

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
