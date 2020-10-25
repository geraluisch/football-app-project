import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContextProvider from './contexts/HomeContext';
import LeagueContextProvider from './contexts/LeagueContext';
import FixturesProvider from './contexts/FixturesContext';
import TeamContextProvider from './contexts/TeamContext';
import SearchLeagueContextProvider from './contexts/SearchLeagueContext';
import './assets/css/styles.css';
import Header from './components/Common/Header';
import SearchBar from './components/Common/SearchBar';
import Footer from './components/Common/Footer';
import NotFound from './components/NotFound';
// import Football from './components/Football';
// import SearchLeague from './components/SearchLeague';
// import Fixtures from './components/Fixtures';
// import LeaguesInfo from './components/Leagues';
// import LeagueTeam from './components/Teams';
// const Header = lazy(() => import('./components/Common/Header'));
// const SearchBar = lazy(() => import('./components/Common/SearchBar'));
// const Footer = lazy(() => import('./components/Common/Footer'));
// const NotFound = lazy(() => import('./components/NotFound'));
const Football = lazy(() => import('./components/Football'));
const SearchLeague = lazy(() => import('./components/SearchLeague'));
const Fixtures = lazy(() => import('./components/Fixtures'));
const LeaguesInfo = lazy(() => import('./components/Leagues'));
const LeagueTeam = lazy(() => import('./components/Teams'));

const App = () => (
  <BrowserRouter>
    <Header />
    <FixturesProvider > 
      <SearchBar />
    </FixturesProvider>
    <Suspense fallback={(<div><h1>Loading...</h1></div>)}>
    <Switch>        
        <Route exact path='/'>
          <HomeContextProvider>
            <Football />
          </HomeContextProvider>    
        </Route>
        <Route path='/search/league'>
          <SearchLeagueContextProvider>
            <SearchLeague />
          </SearchLeagueContextProvider>    
        </Route>     
        <Route path='/search/fixturex'>
          <FixturesProvider >
            <Fixtures />
          </FixturesProvider>    
        </Route>     
        <Route path='/leagues/league/:id'>
          <LeagueContextProvider>
            <LeaguesInfo />
          </LeagueContextProvider>
        </Route>
        <Route path='/teams/team/:id/:id'>
          <TeamContextProvider>
            <LeagueTeam />
          </TeamContextProvider>
        </Route> 
        <Route component={NotFound} />
    </Switch>
    </Suspense>
    <Footer />
  </BrowserRouter>
);

App.displayName = 'App';

export default App;