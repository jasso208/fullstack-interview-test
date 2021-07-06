import { Parents } from "./parents";

export class PullRequest{

    constructor(
        public id:number,
        public number:number,
        public user:User,
        public body:String,
        public title:String,
        public state:String,        
        public parents:Array<Parents>,
    ){

    }

}

class User{
    constructor(
        public login:String
    ){}
}