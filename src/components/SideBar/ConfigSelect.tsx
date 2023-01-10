import React from 'react';
import {ConfigSelectorSlider, ConfigSelectorBox} from './ConfigSelect/Selector';

interface ConfigSelectState {
    selectors:any;
    toolTitle:string;
}

function ConfigSelect(props:ConfigSelectState) {
    let selectors = [];

    for (const key in props.selectors) {
        const selector = props.selectors[key];

        switch (selector.type) {
            case "slider":
                selectors.push
                (
                    <ConfigSelectorSlider
                        id        =  {"index"+"selector"}
                        key       =  {key}
                        title     =  {key}

                        min      =  {selector.floor}
                        val      =  {selector.value}
                        max      =  {selector.roof}

                        onChange =  {(e:any)=>{selector.value=(e.target.value)}}
                    />
                )        
                break;

            case "box":
                selectors.push
                (
                    <ConfigSelectorBox
                        id      =  {"index"+"selector"}
                        key     =  {key}
                        title   =  {key}

                        val      =  {selector.value}

                        onChange =  {(e:any)=>{selector.value=(e.target.checked)}}
                    />
                )        
                break;
            
            default:
                console.error(`Error! Input type "${selector.type}" is not supported.`)
                break;
        }
    }

    return (
        <div 
            className="flex flex-col bg-gray-500 z-20 text-white    m-1 p-1 rounded-md border">
            {`Tool: '${props.toolTitle}'`}
            {selectors}
            {/*React.createElement("div", { className: "contexCon" },selectors)*/}
        </div>
    );
}

export default ConfigSelect;

