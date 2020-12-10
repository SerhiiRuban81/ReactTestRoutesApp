import React from "react"
import { Route, Switch } from "react-router-dom"
export default function News(){
    return(
        <div>
            <h2>Some news</h2>
            <Switch>
                <Route path="/news/london" component={London}></Route>
                <Route path="/news/kryvyirih" component={KryvyiRih}></Route>
                <Route path="/news/rome" component={Rome}></Route>
            </Switch>
        </div>
    )
    
}

export function KryvyiRih(){
    return <h3>Кривой Рог</h3>
}

export function London(){
    return <h3>Лондон</h3>
}

export function Rome(){
    return <h3>Рим</h3>
}