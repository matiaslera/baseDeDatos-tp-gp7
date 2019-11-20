export class Usuario{
    id_usuario:number
    nombre:string
    apellido:string

    getFullName(){
        return this.nombre+" "+this.apellido
    }
    static fromJson(usuarioJSON): Usuario {
        return Object.assign(new Usuario(), usuarioJSON)
    }
}