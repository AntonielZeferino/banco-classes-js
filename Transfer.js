module.exports = class Trasnfer {
   constructor(fromUser, toUser, value){
      this.fromUser = fromUser
      this.toUser = toUser
      this.value = value
      this.createdAt = new Date()
   }
}