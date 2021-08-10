import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Ranbats from './pages/Ranbats'

export default function Routes() {
    return (
        <Router> 
            <Switch> 
                <Dashboard>
                <Route exact path='/ranbats'>
                        <Ranbats />
                    </Route>
                    <Route path="/home" render={() => <div>Home</div>}/>
                </Dashboard>
            </Switch>
        </Router>
    )
}

