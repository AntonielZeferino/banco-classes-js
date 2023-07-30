const Installment = require('./Installment')

module.exports = class Loan{
   static #fee = 1.05

   constructor(value, Installments) {
      this.value = value
      this.Installments = []
      for (let i = 1; i <= Installments; i++) {
         this.Installments.push(new Installment((value * Loan.#fee) / Installments, i))
      }
      this.createdAt = new Date()
   }


   static get fee() {
      return Loan.#fee
    }
  
    static set fee(newFeePercentage) {
      Loan.#fee = 1 + (newFeePercentage / 100)
    }
  
}
