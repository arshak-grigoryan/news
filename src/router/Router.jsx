import React, { lazy, Fragment } from 'react';
import { BrowserRouter, Redirect } from "react-router-dom";
import urls, { SECTIONS } from '../urls';
import { cachableFetch } from '../hooks/useFetch';
import ListenHistory from '../components/history/ListenHistory';
import Navigation from '../components/navigation/Navigation';
import NavigateTo from '../components/navigateTo/NavigateTo';
import NewsItem from '../components/newsItem/NewsItem';
import SuspensedRoute from './SuspensedRoute';
// import NotAuthorized from '../components/notAuthorized/NotAuthorized';

const News = (url) => lazy(() => {
    return Promise.all([
        import('../components/news/News'),
        cachableFetch(url),
    ]).then(([Comp]) => Comp);
});

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <NavigateTo/>
            <ListenHistory/>
            {
                SECTIONS.map((section, i) => {
                    const Component = News(urls[section]);
                    return (
                        <Fragment key={i}>
                            <SuspensedRoute exact path={`/${section}`}>
                                <Component section={section}/>
                            </SuspensedRoute>
                            <SuspensedRoute path={`/${section}/:id`} component={NewsItem}/>
                        </Fragment>
                    );
                })
            }
            <Redirect from='/' to='/home'/>
            {/* <Route path='/notAuthorized' component={NotAuthorized}/> */}
            {/* <Redirect to='/notAuthorized'/>        */}                
        </BrowserRouter>
    )
}

export default Router