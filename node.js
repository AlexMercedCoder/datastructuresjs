// NODE - REPRESENTS ONE UNIT OF DATA

class Node {

    #data = null;

    constructor(data){
        this.#data = data
    }

    getData(){
        return this.#data
    }

    setData(newdata){
        this.#data = newdata
    }
}

module.exports = Node