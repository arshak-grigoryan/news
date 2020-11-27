import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import ListenHistory from '../components/history/ListenHistory';
import Navigation from '../components/navigation/Navigation';
import NavigateTo from '../components/navigateTo/NavigateTo';
// import News from '../components/news/News';
import NewsItem from '../components/newsItem/NewsItem';
import NotAuthorized from '../components/notAuthorized/NotAuthorized';
import Loader from '../components/loading/Loading';
import urls, { SECTIONS } from '../urls';
import { cachableFetch } from '../hooks/useFetch';

const News = (url) => lazy(() => {
    return Promise.all([
        import('../components/news/News'),
        cachableFetch(url),
    ]).then(([Comp]) => Comp);
});

const Router = () => {
    return (
        <>
            <Navigation/>
            <NavigateTo/>
            {SECTIONS.map(section => {
                const Component = News(urls[section]);
                return (
                    <>
                        <Route exact path={section}>
                          <Suspense fallback={<Loader />}>
                              <Component section={section} />
                          </Suspense>
                        </Route>
                        <Route path={`/${section}/:id`} render={() => <NewsItem/>}/>
                    </>
                );
            })}
        {/* <ListenHistory/> */}
            <Redirect to="/home" from="/" />
            {/* <Route component={NotAuthorized}/>        */}
        </>
    )
}

export default Router