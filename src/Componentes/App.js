import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RegistroUsuario from './Pages/Registro_Usuario'
import Login from './Pages/Login'

const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/registro" component= {RegistroUsuario} />
        </Switch>
    </BrowserRouter>

)

export default App