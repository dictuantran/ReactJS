import React, { Component } from "react";

export class Search extends Component {

    constructor(props) {
        super(props);
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            console.log(e.target.value);
        }
    }

    render () {
        return <div>
                Search <input className="form-group" name="search" onKeyDown={this.handleKeyDown} />            
        </div>
    }
}