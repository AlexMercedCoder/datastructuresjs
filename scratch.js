const Node = require("./node")
const Stack = require("./stack")

const pancakes = new Stack()

pancakes.push("blueberry")
pancakes.push("strawberry")
pancakes.push("chocolate chip")

console.log(pancakes.pop())
console.log(pancakes.pop())
console.log(pancakes.pop())
