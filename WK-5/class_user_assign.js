/*
Create a `User` class with the following properties:
- `username` (e.g., 'johndoe')
- `password` (e.g., 'password123')
Include methods: 
> `updatePassword(newPassword)` to update the password, and 
> `checkPassword(password)` to check if the given password matches the user's password.

const user1 = new User('johndoe', 'password123');
console.log(user1.checkPassword('password123'));  // Output: true

user1.updatePassword('newpassword456');

console.log(user1.checkPassword('password123'));  // Output: false
console.log(user1.checkPassword('newpassword456'));  // Output: true
*/

{
    class User{
        constructor(username, password){
            this.username = username;
            this.password = password;
        }

        updatePassword(newPassword){
            return this.password = newPassword
        }
        checkPassword(password){
            if (password == this.password){
                return true
            }else {
                return false
            }
        }
    }
    const user1 = new User('johndoe', 'password123');
    console.log(user1.checkPassword('password123'));  // Output: true

    user1.updatePassword('newpassword456');

    console.log(user1.checkPassword('password123'));  // Output: false
    console.log(user1.checkPassword('newpassword456'));  // Output: true
}