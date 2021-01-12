import React, { Component } from 'react';

class Counter extends Component {
    state={
        count: 0,
    };

    getBadgeClass() {
        let className = "badge badge-lg m-2 badge-";
        className += this.state.count === 0 ? "warning" : "danger";
        return className;
    }

    render() { 
        return (
            <>
               <span className={this.getBadgeClass()}>
                   {this.formatNumber()}
               </span>
               <button className="btn btn-primary m-2">Inrement</button>
            </>
            );
    }
   
    formatNumber() {
        const {count}= this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;