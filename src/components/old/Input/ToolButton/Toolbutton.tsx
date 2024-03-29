import data from "./data";
import {selectNewTool} from "./data";
import Icon from '@mdi/react';
import React from "react";
import { mdiTools } from "@mdi/js";


/**/
import freeCreate from '../../../../components/old/freeCreation/freeCreatePage'
import worldCreate from '../../../../components/old/worldCreation/worldCreationRender'
import userCreate from '../../../../components/old/userCreateLogin/userCreate/userCreaterender'
import userLogin from '../../../../components/old/userCreateLogin/userLogin/userLoginRender'
  /**/


  /**/
  const pages:any = {
    freeCreatePage: freeCreate,
    worldCreationPage: worldCreate,
    userCreatePage: userCreate,
    userLoginPage: userLogin,
  };
  
  
  

  /**/
function ToolButton(props:any) {
    const [selectedToolId, setToolId] = React.useState(() => {return 0;});      
    //const [Sidepage,Setpages] = React.useState(()=>pages[currentPage]);

    return (
        <span 
            onClick={(e)=>{ selectNewTool(props.index, e.currentTarget, setToolId); }}
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

function tool(props: any) {
    throw new Error("Function not implemented.");
}