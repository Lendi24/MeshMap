class CreateTool extends Tool {
    conf: {
        "Width" : {
            value : 3, 
            type : "number", 
            step : 1, 
            min : 1, 
            max : 50, 
            icon : "mdi-shape-polygon-plus", 
        },

        "Height" : {
            value : 3, 
            type : "number", 
            step : 1, 
            min : 1, 
            max : 50, 
            icon : "mdi-shape-polygon-plus", 
        },
    };
}