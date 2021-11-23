export default class UserService{

    add(user){
        console.log("Kullancı eklendi" + user)
    }

    list(){
        console.log("Kullanıcılar Listelendi")
    }

    getById(id){
        console.log("kullanıcı detayı getirildi.")
    }
}