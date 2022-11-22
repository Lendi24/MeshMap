class NameGen {
    static generate() {

        return (
             `a ${wordlist.adjective[ Math.floor(Math.random() * wordlist.adjective.length) ]}` +
              ` ${wordlist.subjectives[ Math.floor(Math.random() * wordlist.subjectives.length) ]} ` +
            `of ${wordlist.nouns[ Math.floor(Math.random() * wordlist.nouns.length) ]}` 
            );
    }
}

class wordlist {
    static adjective = [
        "hungary",
        "ugly",
        "beautiful",
        "new",
        "old",
        "normal",
    ]

    static subjectives = [
        "pen", 
        "island",
        "duck",
        "penguine",
    ];


/*
    static verbs = [
        "left",
        "talked",
        "turned",
    ]*/

    static nouns = [
        "Actor",
        "Gold", 
        "Painting",
        "Advertisement",
        "Grass", 
        "Parrot", 
        "Afternoon", 
        "Greece", 
        "Pencil", 
        "Airport", 
    ]
}


class Room {
    id:number; 
    name:string; 
    description:string; 
    terrain; 
    exits:Array<number>;

    constructor (id:number, name:string) {
        this.id             = id;
        this.name           = name;
        this.description    = "";
        this.terrain        = "";
        this.exits = [];
    }

    linkToNode(id:number) {
        if (id!=this.id) {
            this.exits.push(id)
        }
    }

    unlinkFromNode(id:number) {
        if (id!=this.id) {
            //this.exits.push(id)
        }
    }

    showLocation() {
        console.log(this)
    }
}

let nodeList:Array<Room>;

function generateNodes(amnt:number) {
    for (let i = 0; i < amnt; i++) {
        let node = new Room(i,NameGen.generate());
        if (i == 0) {
            node.linkToNode(amnt);
            node.linkToNode(i+1);
        } else if (i == amnt) {
            node.linkToNode(i-1);
            node.linkToNode(0);
        } else {
            node.linkToNode(i-1);
            node.linkToNode(i+1);
        }
    
        nodeList.push(node)
    }    

    console.log(nodeList);
}

