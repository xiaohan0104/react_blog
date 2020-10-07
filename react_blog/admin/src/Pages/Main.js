import React,{ useState } from 'react'
import{BrowserRouter as Router ,Route} from 'react-router-dom'
import Login from './Login'
import Index from './AdminIndex'
import {Card,Input,Button,Spin} from 'antd'
import {} from '@ant-design/icons'

function Main(){

    return(
        <Router>
            <Route path='/' exact component={Login} />
            <Route path='/index' exact component={Index} />
        </Router>
    )
}

export default Main