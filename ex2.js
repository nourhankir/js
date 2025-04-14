/*
Create a BankAccount class that has:


constructor(ownerName, initialBalance)


deposit(amount)


withdraw(amount)


transferTo(anotherAccount, amount) → transfers if enough balance


getSummary() → returns:

"John's balance is $400"


Bonus:


Store as an array of strings: ["Deposited $200", "Withdrew $50"]


Add printHistory() method


Example:
const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
acc1.transferTo(acc2, 200); 
acc1.getSummary(); // John's balance is $300 
acc2.getSummary(); // Sara's balance is $500 
acc1.printHistory();
*/
class BankAccount{
    constructor(ownerName, initialBalance){this.ownerName = ownerName; this.balance = initialBalance;this.history = [];}
    deposit(amount){this.balance+=amount;}
    withdraw(amount){this.balance-=amount;}
    transferTo(anotherAccount, amount){
      if(this.balance >= amount){
        this.withdraw(amount);
        anotherAccount.deposit(amount);
        this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);
        anotherAccount.history.push(`Received $${amount} from ${this.ownerName}`);
        console.log(`Transferred $${amount} to ${anotherAccount.ownerName}`);
      }
      else {
        console.log("Insufficient balance for transfer.");
      }
    }
    getSummary(){return `${this.ownerName}'s balance is $${this.balance}`;}
    accountHistory(){return this.history;}
}
acc1=new BankAccount("John", 500);
acc2=new BankAccount("Sara", 300);
acc1.transferTo(acc2, 200);
acc2.transferTo(acc1, 100);
console.log(acc1.getSummary())
console.log(acc1.accountHistory())