import React, {Component} from "react";

class ToolConf extends React.Component {
    /*
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };*/
      
    forceUpdateHandler(){
        this.forceUpdate();
    };
      
    render(){
        return(
            <>
                <b> { data[state].title } </b>
            </>
    
            /*
            <div>
                <button onClick= {this.forceUpdateHandler} >FORCE UPDATE</button>
                <h4>Random Number : { Math.random() }</h4>
            </div>*/
        );
    }
    
}

export default ToolConf;

export function setToolConfigState(val:number) {state = val; console.log(val); }

let state = 0;
let data = [
    {
        title : "1",
        key : "value",
    },

    {
        title : "2",
        key : "value",
    },

    {
        title : "3",
        key : "value",
    },

];
/*
export default (
    <>
        <b> { data[state].title } </b>
    </>
)
*/