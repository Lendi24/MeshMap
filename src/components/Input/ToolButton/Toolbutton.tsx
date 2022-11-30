import data from "./data";
import {selectedTool, selectNewTool} from "./data";
import Icon from '@mdi/react';
import React from "react";

let action = () => {
    console.log("yoinlk")
}

function ToolButton(props:any) {
    return (
        <span 
            onClick={(e)=>{selectNewTool(props.index,e.currentTarget)}}
            title={props.title} 
            className="
                text-white 
                border-2 
                rounded 
                hover:bg-green-700 
                hover:scale-110 
                transform transition-all 
                w-10" >
            <Icon path={props.icon}></Icon>
        </span>
    )
}

export default data.map((item, index) => {
    return (
        <ToolButton
            key     =  {index+item.title}
            index   =  {index}
            title   =  {item.title}
            icon    =  {item.icon}
        />
    )
})        

