/*
Create a `BankAccount` class with the following properties:
- `accountNumber` (e.g., '123456')
- `accountHolder` (e.g., 'John Doe')
- `balance` (e.g., 1000)
Include methods `deposit(amount)` and `withdraw(amount)`. 
Ensure that the balance cannot go negative.
*/

{
    class BankAccount{
        balance = 0;
        constructor(accountNumber, accountHolder, balance){
            this.accountNumber = accountNumber;
            this.accountHolder = accountHolder
            this.balance = balance
        }

        deposit (amount) {
            this.balance = this.balance + amount
            return this.balance
        }
        withdraw(amount) {
            this.balance = this.balance - amount
            if (this.balance < 0){
                console.log("Balance cannot be negative")
                return false
            }else{
                return this.balance
            }
        }
        getAccountDetails(){
            console.log(`AccHolder: ${this.accountHolder}, AccNo: ${this.accountNumber}, Bal: ${this.balance}`)
        }
    }

    let newBankAcc = new BankAccount("010045", "Jamie Brown", 80)
    newBankAcc.getAccountDetails()
    newBankAcc.deposit(200)
    newBankAcc.getAccountDetails()
    newBankAcc.withdraw(-290)
}