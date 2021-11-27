import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../modals/user.js"
import UserService from "../services/userService.js"

console.log("User Component yüklendi !")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"engin","demiroğ","ankara")
let user2 = new User(2,"alp","sönmez","biga")
userService.add(user1 )
userService.add(user2 )



console.log(userService.list())
console.log(userService.getById(2))


//prototyping
let customer = { id: 1, firstName: "engin" }
customer.lastName = "Demiroğ"
console.log(customer.lastName)

console.log(".....................")

userService.load()
console.log(userService.customers)
console.log(userService.employees)