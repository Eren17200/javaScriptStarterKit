import { users } from "../data/users.js"

export default class UserService{
    constructor(loggerService) { 
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
        }
    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                        this.employees.push(user)
                        break;    
            
                default:
                   this.errors.push("wrong user type") 
                    break;
            }
        }

    }
        
    add(user){
        //console.log("Kullancı eklendi " + user)
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
       // console.log("Kullanıcılar Listelendi")
       //return this.users
    }

    getById(id){
        //console.log("kullanıcı detayı getirildi.")
        //return this.users.find(u=>u.id ===id)
    }
}