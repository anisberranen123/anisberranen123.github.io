export class Tag {
static readonly ANGULAR=new Tag('Angular','red');
static readonly TYPESCRIPT=new Tag('TypeScript','darkred');
static readonly PYTHON=new Tag('Python','pink');
static readonly CSHARP=new Tag('C#','green');
static readonly JAVA=new Tag('Java', 'orange');
static readonly NODEJS = new Tag('Node.JS', 'brown');
static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
static readonly REACT=new Tag('React','purple');
static readonly ASPNET=new Tag('.ASPNET','magenta');
static readonly HTML=new Tag('HTML','blue');
static readonly CSS=new Tag('CSS','cyan');
static readonly FIREBASE=new Tag('Firebase','grey');


    private constructor(private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}