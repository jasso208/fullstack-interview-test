export class Commmit{
    constructor(
        public commit:DetalleCommit,
        public parents:Array<Parents>
        ){}
    
}

class DetalleCommit{
    constructor(
        public author: Autor,
        public message:String,
    ){}
    
}

class Autor{
    constructor(
        public name:String,
        public email:String,
        public date:String 
    ){}
}

class Parents{
    constructor(
        public html_url : String,
        public sha : String,
        public url : String
    ){}
    
}
