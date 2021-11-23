import UserService from "../services/userService.js"


console.log("User Component yüklendi !")

let userService = new UserService

userService.add()
userService.list()
userService.getById(1)
