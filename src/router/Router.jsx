import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListenHistory from '../components/history/ListenHistory';
import Navigation from '../components/navigation/Navigation';
import NavigateTo from '../components/navigateTo/NavigateTo';
import News from '../components/news/News';
import NewsItem from '../components/newsItem/NewsItem';
import NotAuthorized from '../components/notAuthorized/NotAuthorized';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <NavigateTo/>
            {/* <ListenHistory/> */}
            {/* <Switch> */}
                <Route exact path='/' render={() => <News section='home'/>} />
                <Route exact path='/home' render={() => <News section='home'/> } />
                <Route path='/home/:id' render={() => <NewsItem/>}/>
                <Route exact path='/arts' render={() => <News section='arts'/>} />
                <Route path='/arts/:id' render={() => <NewsItem />}/>
                <Route exact path='/books' render={() => <News section='books'/>} />    
                <Route path='/books/:id' render={() => <NewsItem />}/>   
                {/* <Route component={NotAuthorized}/>        */}
            {/* </Switch> */}
        </BrowserRouter>
    )
}

export default Router