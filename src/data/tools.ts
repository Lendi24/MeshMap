import * as icons from '@mdi/js' ;
import '@mdi/js';

let pageTools = [
    {
        data : {
            title:  "freeCreatePage",
            icon:   icons.mdiCursorDefault,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                step  : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },

    {
        data : {
            title:  "worldCreationPage",
            icon:   icons.mdiEarthPlus  ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                step  : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },

    {
        data : {
            title:  "userCreatePage",
            icon:   icons.mdiAccountPlus ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                step  : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },

    {
        data : {
            title:  "userLoginPage",
            icon:   icons.mdiAccountKey  ,
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                step  : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },

    },

    {
        data : {
            title:  "Create",
            icon:   icons.mdiContentSave ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                step  : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },

    {
        data : {
            title: "Create",
            icon: icons.mdiShapeCirclePlus,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                step  : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },


/*
    { 
        title: "Connect (C)",
        icon: icons.mdiVectorLine,
    },*/
];
/*
let tools = {
    'S' : {
        title: "Select",
        icon: icons.mdiCursorDefault,
    },

    'D' : {
        title: "Draw",
        icon: icons.mdiShapeCirclePlus,
    },
};*/

// = tools[0];

export default pageTools;
