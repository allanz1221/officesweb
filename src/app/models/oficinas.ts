export class Oficinas{
    constructor(
        public id: number,
        public id_usuario:number,
        public establecimiento:string,
        public nombre:string,
        public pais:string,
        public estado:string,
        public ciudad:string,
        public descripcion:string,
        public tipo_oficina:string,
        public long_ubicacion:any,
        public lat_ubicacion:any,
        public precio_dia:number,
        public precio_hora:number,
        public status:number,
        

    ){}
}