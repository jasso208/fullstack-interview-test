export class PullRequest{

    constructor(
        public id:number,
        public number:number,
        public user:User,
        public body:String,
        public title:String,
        public state:String
    ){

    }

}

class User{
    constructor(
        public login:String
    ){}
}