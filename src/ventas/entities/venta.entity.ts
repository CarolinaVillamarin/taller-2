export class Venta {

    //Metodo constructor :
    //metodo que se ejecuta automaticamente
    //cuando se crea objeto: new
    //sirve para dar valores iniciales 
    //a los atributos de clases 

    constructor( 
        private _id: number,
        private _producto:string,
        private _releaseDate:Date,
        private _metodoPago:string,
        private _cantidad:number 
       ){}

    //metodo accesores (getters):
    //permiten acceder a atributos
    //privados:
    public get id():number{
        return this._id
    }

    public get producto():string{
        return this._producto
    }

    public get releaseDate():Date{
        return this._releaseDate
    }

    public get metodoPago():string{
        return this._metodoPago
    }

    public get cantidad():number{
        return this._cantidad
    }

    }            

