class Animal{
    nome:string;

    constructor(nome:string){
        this.nome=nome
    }
    apresentar():void{
        console.log(`Seu nome é ${this.nome}`);
    }

}
const animal=new Animal("Galo");
animal.apresentar();