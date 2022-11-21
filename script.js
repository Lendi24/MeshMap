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
    constructor () {
        this.id;
        this.name;
        this.description;
        this.terrain;
        this.exits = [];
    }
}