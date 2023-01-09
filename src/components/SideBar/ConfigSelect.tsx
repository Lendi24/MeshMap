import React from 'react';
import {ConfigSelectorSlider, ConfigSelectorBox} from './ConfigSelect/Selector';

interface ConfigSelectState {
    selectors:any;
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
            className="flex flex-row flex-wrap bg-gray-600 z-20">
            {/*selectors*/}
            {React.createElement("div", { className: "contexCon" },selectors)}
        </div>
    );
}

export default ConfigSelect;

