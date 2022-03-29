import React from 'react'
import { Route, Switch} from 'react-router'
import Login from './Login-signup/Login'
import Signup from './Login-signup/Signup'
function Home() {
    return (
        <div>
            <Switch>
                <Route  path="" component={Login}/>
                <Route path='/Signup' component={Signup} />
            </Switch>
        </div>
    )
}

export default Home
