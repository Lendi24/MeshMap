import React from 'react'
 function WorldCreatePage(props:any){
   

    const [pageID, setPageID] = React.useState("Maze");


 const pages:any = {
        Circular: "Circular",
        Maze: "Maze",
        Dungeon: "Dungeon",
        Gitter: "Gitter",

      };

      const [menu, setMenu] = React.useState(pages[pageID]);

      React.useEffect(() => {
        setMenu(pages[pageID])
          
      }, [pageID])


   function ChangePage(elem:HTMLElement){
       setPageID(elem.title);
       console.log(pageID)

   }
    
   
    function onHover(elem:HTMLElement){
        elem.style.backgroundColor = "darkGreen";
        elem.style.fontWeight = "900"

    }
    function onMouseLeave(elem:HTMLElement){
        elem.style.backgroundColor = "transparent";
        elem.style.fontWeight = "700"

    }
    
return(

    <>
    <div className="grid grid-cols-2 gap-4 ">

        <div
        onMouseOver={(e)=>onHover(e.currentTarget)}
        onMouseLeave ={(e)=>onMouseLeave(e.currentTarget)}
        onClick ={(e)=>ChangePage(e.currentTarget)}
        title="Maze"

        className="flex items-center justify-center font-bold rounded">
        Maze
        </div>

        <div
        onMouseOver={(e)=>onHover(e.currentTarget)}
        onMouseLeave ={(e)=>onMouseLeave(e.currentTarget)} 
        onClick ={(e)=>ChangePage(e.currentTarget)}
        title="Gitter"

        className="flex items-center justify-center font-bold">
        Gitter
        </div>

        <div 
        onMouseOver={(e)=>onHover(e.currentTarget)}
        onMouseLeave ={(e)=>onMouseLeave(e.currentTarget)}
        onClick ={(e)=>ChangePage(e.currentTarget)}
        title="Circular"

        className="flex items-center justify-center font-bold">
        Circular
        </div>

        <div 
        onMouseOver={(e)=>onHover(e.currentTarget)}
        onMouseLeave ={(e)=>onMouseLeave(e.currentTarget)}
        onClick ={(e)=>ChangePage(e.currentTarget)}
        title="Dungeon"
        className="flex items-center justify-center font-bold">
        Dungeon
        </div>

    </div>

    {menu}
    </>
)

}
export default WorldCreatePage