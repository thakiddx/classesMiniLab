class  User { 
    constructor(email, username, passwordProperties) {
    this.email = email;
    this.username = username;
    this.passwordProperties = passwordProperties;
   }
}

const Xavier = new User('g_unitsoulja206@msn.com', 'g_unitSoulja', '12345');
const Unity = new User('meanGirl21@aol.com', 'meanGirl21', '345212');
const Quentin = new User('coolBreeze92@yahoo.com', 'coolBreeze92', '231456');


console.log(Xavier);
console.log(Unity);
console.log(Quentin);