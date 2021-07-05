export class Commit{
    constructor(
        public commit:DetalleCommit,
        public parents:Array<Parents>,
        public sha:String,
        public files:Array<Files>
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

class Files{
    constructor(
        public sha:String,
        public blob_url:String
    ){
        
    }
}