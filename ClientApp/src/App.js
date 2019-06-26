import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            tasks : [] // id: unique, name, status
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            
            this.setState ({
                tasks : tasks
            });
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name: "Học lập trình",
                status: true
            },
            {
                id: this.generateID(),
                name: "Thể dục",
                status: true
            },
            {
                id: this.generateID(),
                name: "Đi cafe",
                status: false
            },
        ]

        this.setState({
            tasks : tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    s4 () {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4()+ this.s4() + '-' + this.s4();
    }

    render () {
        var {tasks } = this.state;
        return (
            <div className="container">
            <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
            </div>
            <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                <span className="" />Thêm Công Việc
                </button>&nbsp;
                <button type="button" className="btn btn-danger ml-5"
                    onClick={ this.onGenerateData }>
                    Generate Data
                </button>
                <Control />

                <TaskList tasks={ tasks }/>
            </div>
            </div>
        </div>
        )
    }
}

export default App;