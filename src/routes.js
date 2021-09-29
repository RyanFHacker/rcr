import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Ranbats from './pages/Ranbats'
import Events from './pages/Events'

export default function Routes() {
    return (
        <Router> 
            <Switch> 
                <Dashboard>
                <Route exact path='/ranbats'>
                        <Ranbats />
                </Route>
                <Route exact path='/events'>
                        <Events />
                </Route>
                <Route path="/home" render={() => <div>Home</div>}/>
                <Route path='/shop' 
                    component={() => {
                        window.location = 'https://san-antonio-fgc-merchandise.creator-spring.com/';
                    return null; 
                }}/>
                <Route path='/facebook' 
                    component={() => {
                        window.location = 'https://facebook.com/groups/SAFGC';
                    return null; 
                }}/>
                <Route path='/twitter' 
                    component={() => {
                        window.location = 'https://twitter.com/SanAntonioFGC';
                    return null; 
                }}/>
                <Route path='/discord' 
                    component={() => {
                        window.location = 'https://discord.gg/sanantoniofgc';
                    return null; 
                }}/>
                </Dashboard>
            </Switch>
        </Router>
    )
}

