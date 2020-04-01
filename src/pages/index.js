import React, { Component } from  'react'
import { Route } from 'react-router-dom'
import './index.css'
import '../static/css/index.css'
import loadable from "../static/util/loadbale";
import LeftBar from '../static/component/leftBar'
import Header from '../static/component/header'

const Home = loadable(()=>import('./ljh/home'));
const projectList = loadable(()=>import('./ljh/projectList'));
const organizationChart = loadable(()=>import('./hyz/organizationChart'));
const projectProgress = loadable(()=>import('./ljh/projectProgress'));
const technologyManage = loadable(()=>import('./ljh/technologyManage'));
const taskList = loadable(()=>import('./wjb/taskList'));


const workPlace = loadable(()=>import('./wwp/workPlace'));


class MainFrame extends Component{
    state = {
    };

    render() {
        return(
            <div>
                <Header/>
                <LeftBar/>
                <div className='rightBodyUnfold'>
                    <Route path="/sys/home" component={Home}/>
                    <Route path="/sys/organizationChart" component={organizationChart}/>
                    <Route path="/sys/projectList" component={projectList}/>
                    <Route path="/sys/projectProgress" component={projectProgress}/>

                    <Route path="/sys/technologyManage" component={technologyManage}/>
                    <Route path="/sys/taskList" component= {taskList}/>
                   
                   
                    <Route path="/sys/workPlace" component={workPlace}/>

                </div>
            </div>
        )
    }
}

export default MainFrame
