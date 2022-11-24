import React from "react";
import cardImg from "./images/katie-zaferes.png";
import starImg from "./images/star.png";
import data from "./data";
import Icon, { Stack } from '@mdi/react';

function ToolButto(props:any) {
    return (
        <span 
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

        /*
        <div className="card">
            
            <div className="card--stats">
                <span className="gray">{props.location}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span>USA</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / Person</p>
        </div>*/
    )
}

export default data.map(item => {
    return (
        <ToolButto 
            key     =  {item.title}
            title   =  {item.title}
            icon    =  {item.icon}
        />
    )
})        

