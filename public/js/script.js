"use strict";
class NameGen {
    static generate() {
        return (`a ${wordlist.adjective[Math.floor(Math.random() * wordlist.adjective.length)]}` +
            ` ${wordlist.subjectives[Math.floor(Math.random() * wordlist.subjectives.length)]} ` +
            `of ${wordlist.nouns[Math.floor(Math.random() * wordlist.nouns.length)]}`);
    }
}
class wordlist {
}
wordlist.adjective = [
    "hungary",
    "ugly",
    "beautiful",
    "new",
    "old",
    "normal",
];
wordlist.subjectives = [
    "pen",
    "island",
    "duck",
    "penguine",
];
wordlist.nouns = [
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
];
class Room {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.description = "";
        this.terrain = "";
        this.exits = [];
    }
    linkToNode(id) {
        if (id != this.id) {
            this.exits.push(id);
        }
    }
    unlinkFromNode(id) {
        if (id != this.id) {
        }
    }
    showLocation() {
        console.log(this);
    }
}
let nodeList;
function generateNodes(amnt) {
    for (let i = 0; i < amnt; i++) {
        let node = new Room(i, NameGen.generate());
        if (i == 0) {
            node.linkToNode(amnt);
            node.linkToNode(i + 1);
        }
        else if (i == amnt) {
            node.linkToNode(i - 1);
            node.linkToNode(0);
        }
        else {
            node.linkToNode(i - 1);
            node.linkToNode(i + 1);
        }
        nodeList.push(node);
    }
    console.log(nodeList);
}
