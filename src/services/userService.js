import { users } from "../data/users.js"
import DataError from "../modals/dataError.js"

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
                    if (!this.checkCustomerValidityForErrors(user)) {
                         this.customers.push(user)
                    }
                   
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                        
                        break;    
            
                default:
                   this.errors.push(new DataError("wrong user type",user)) 
                    break;
            }
        }

    }
    //formik-yup
    checkCustomerValidityForErrors(user){
        let requiredFields ="id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Vallidation problem .${field} is required`,user))
            }
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields ="id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Vallidation problem .${field} is required`,user))
            }
        }
        return hasErrors
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