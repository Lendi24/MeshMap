/*
function ConfigSelect(props:any) {
    console.log(props.toolConf/*.conf*//*)
    return (
        <span>{}</span>
    )
}

export default ConfigSelect;
*/





import React from 'react';
import ConfigSelector from './ConfigSelect/Selector';

interface ConfigSelectState {
    selectors:any;
}

function ConfigSelect(props:ConfigSelectState) {
    let selectors = [];

    for (const key in props.selectors) {
        selectors.push
        (
            <ConfigSelector
                id      =  {"index"+"selector"}
                key     =  {key}
                title   =  {key}
            />
        )
        console.log(props.selectors[key])
    }


    /*
    let selectors = props.selectors.map((item:any, index:number) => 
        (
            <ConfigSelector
                id      =  {index+"selector"}
                key     =  {index}
                index   =  {index}
            />
        )
    )*/
    
    /*
    let selectors = 
    (
        <ConfigSelector
            id      =  {"index"+"selector"}
            key     =  {65}
            index   =  {5}
        />
    )*/

    /*
    let selectors = (
        <React.Fragment>
            
        </React.Fragment>
    )

    selectors.*/

/*
    for (const key in props.selectors) {
        selectors += 
        (
            <ConfigSelector
                id      =  {"index"+"selector"}
                key     =  {65}
                index   =  {5}
            />
        )
        console.log(props.selectors[key])
    }*/



        
    return (
        <div 
            className="flex flex-row flex-wrap bg-gray-600 z-20">
            {/*selectors*/}
            {React.createElement("div", { className: "contexCon" },selectors)}
        </div>
    );
}

export default ConfigSelect;

