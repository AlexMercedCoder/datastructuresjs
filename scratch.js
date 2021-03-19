const Node = require("./node")
const Stack = require("./stack")
const Queue = require("./queue")

const splashmountainline = new Queue()

splashmountainline.queue("Bob")
splashmountainline.queue("Stacy")
splashmountainline.queue("Steve")

console.log(splashmountainline.dequeue())
console.log(splashmountainline.dequeue())
console.log(splashmountainline.dequeue())
