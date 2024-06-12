import {Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './Components/LoginPage'
import Home from './Components/Home'

import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />

    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
