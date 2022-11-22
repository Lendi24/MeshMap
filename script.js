class NameGen {
    static generate() {
        console.log(
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


class Node {
    constructor (id, name) {
        this.id             = id;
        this.name           = name;
        this.description;
        this.terrain;
        this.exits = [];
    }

    linkToNode(id) {
        if (id!=this.id) {
            this.exits.push(id)
        }
    }

    unlinkFromNode(id) {
        if (id!=this.id) {
            //this.exits.push(id)
        }
    }

    showLocation() {
        console.log(this)
    }
}

let nodeList = [];

function generateNodes(amnt) {
    for (let i = 0; i < amnt; i++) {
        node = new Node("yo",i);
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

