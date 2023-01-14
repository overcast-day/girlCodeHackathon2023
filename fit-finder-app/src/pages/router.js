import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageNotFound } from './404'
import { About } from './About'
import { Components } from './Components'
import {Homepage} from "./Homepage";
import {Upload} from "./Upload";
import {LoadingPage} from "./LoadingPage";
import {ItemPage} from "./ItemPage";
import {CartPage} from "./CartPage";


export const router = () => {
    return (
        <Switch>
            <Route path='/components' exact component={Components}/>
            <Route path='/about' exact  component={About}/>
            <Route path='/' exact component={Homepage}/>
            <Route path='/HomePage' exact component={Homepage}/>
            <Route path='/Upload' exact component={Upload}/>
            <Route path='/LoadingPage' exact component={LoadingPage}/>
            <Route path='/ItemPage' exact component={ItemPage}/>
            <Route path='/CartPage' exact component={CartPage}/>
            <Route component={PageNotFound}/>
        </Switch>
    )
}
