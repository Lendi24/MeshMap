import * as icons from '@mdi/js' ;
import '@mdi/js';

let pageTools = [
    {
        data : {
            title:  "Select",
            icon:   icons.mdiCursorDefault,    
        },

        conf : {
            SelectProp : {
                icon:   icons.mdiCursorDefault,    
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testböx : {
                type : "box",
                value : 0,
            },
        },
    },

    {
        data : {
            title:  "Draw",
            icon:   icons.mdiPen  ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
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
