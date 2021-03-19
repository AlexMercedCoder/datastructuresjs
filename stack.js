const Node = require("./node")

class Stack {
    #data = [];
    constructor(){

    }

    push(newnode){
        this.#data.push(new Node(newnode))
    }

    pop(){
        return this.#data.pop().getData()
    }
}

module.exports = Stack