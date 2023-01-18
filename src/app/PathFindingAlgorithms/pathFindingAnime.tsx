//canvasupdateimport _=)
export default function animate(world:any, array:any){

    let originalColor:string;
    let path = array;
    
    for (let i = 0; i < array.length; i++) {

        setTimeout(() => {
            // if (i == array.length-1) {
                if (i > 0) {
                    path[i-1].rgbText =originalColor;
                }
    
                originalColor = path[i].rgbText
                path[i].rgbText = "rgb(0,255,0)";
    
                if (i == array.length-1) {
                    setTimeout(() => {
                        console.log(originalColor)
                        console.log( path[array.length-1])
                        path[array.length-1].rgbText = originalColor;
                        //canvasUpdate()
                    }, 3000);
                
                }
           
            //canvasUpdate();
         
        }, 100*i);
        
    }


}


/*
No
*/