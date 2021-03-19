const Node = require("./node")

class Queue {
    #data = [];

    queue(data){
        this.#data.push(new Node(data))
    }

    dequeue(){
        return this.#data.shift().getData()
    }
}

module.exports = Queue