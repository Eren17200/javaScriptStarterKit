export default class UserService{
    constructor(loggerService) { 
        this.users = []
        this.loggerService = loggerService
        }

    add(user){
        //console.log("Kullancı eklendi " + user)
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
       // console.log("Kullanıcılar Listelendi")
       return this.users
    }

    getById(id){
        //console.log("kullanıcı detayı getirildi.")
        return this.users.find(u=>u.id ===id)
    }
}