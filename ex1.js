  class Usuario{
        constructor(email,senha){
            this.email = email;
            this.senha = senha;
            

        }

        isAdmin(){
            return this.admin === true;
        }
    }

    class Admin extends Usuario {
        constructor(){
            super();
            this.admin = true;
        }

    }